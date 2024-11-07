"use server";

import prisma from "@/lib/prisma";
import { Template } from "@prisma/client";
import { uploadImages } from "../images/upload-images";

export const createUpdateTemplate = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  const { id, ...rest } = data;

  try {
    const prismaTx = await prisma.$transaction(async () => {
      let template: Template;
      if (id) {
        template = await prisma.template.update({
          where: { id: +id },
          data: {
            templateName: rest.templateName as string,
            description: rest.description as string,
          },
        });
      } else {
        template = await prisma.template.create({
          data: {
            templateName: rest.templateName as string,
            description: rest.description as string,
            createdByUserId: "942d14fd-e390-428c-a826-cc39e680816c",
          },
        });
      }

      //upload image
      if (
        formData.get("templateImage") &&
        formData.get("templateImage") instanceof File
      ) {
        await uploadAndCreateImage(
          formData.get("templateImage") as File,
          template.id
        );
      }

      //create sections
      const createdSections = await createUpdateSections(
        template.id,
        JSON.parse(rest.sections as string)
      );

      return { template, createdSections };
    });

    return {
      ok: true,
      template: { ...prismaTx.template, sections: prismaTx.createdSections },
    };
  } catch (error) {
    console.log("Error creating template", error);
    return { ok: false, error: "Error creating template" };
  }
};

const uploadAndCreateImage = async (
  formDataImage: File,
  templateId: number
) => {
  console.log({ formDataImage, templateId });

  const uploadedImage = await uploadImages(
    [formDataImage],
    `templates/${templateId}`
  );

  console.log("uploadedImage: ", uploadedImage);

  if (!uploadedImage) {
    throw new Error("Error uploading image");
  }

  await prisma.image.createMany({
    data: uploadedImage.map((url) => ({
      imageUrl: url!,
      templateId,
    })),
  });
};

const createUpdateSections = async (
  templateId: number,
  sections: { id?: number; sectionName: string; requiresImage: boolean }[]
) => {
  const sectionTypeNames = sections.map((section) => section.sectionName);

  const sectionTypes = await prisma.sectionType.findMany({
    where: {
      name: {
        in: sectionTypeNames,
      },
    },
  });

  const templateSectionsData = sections.map((section) => {
    const sectionType = sectionTypes.find(
      (st) => st.name === section.sectionName
    );

    if (!sectionType) {
      throw new Error(`Section type ${section.sectionName} not found`);
    }

    return {
      ...(section.id && { id: section.id }),
      templateId,
      sectionTypeId: sectionType.id,
      requiresImage: section.requiresImage,
    };
  });

  const existingSections = await prisma.templateSection.findMany({
    where: { templateId },
  });

  const toUpdate = templateSectionsData.filter((section) =>
    existingSections.some((existing) => existing.id === section.id)
  );
  const toCreate = templateSectionsData.filter(
    (section) =>
      !existingSections.some((existing) => existing.id === section.id)
  );
  const toDelete = existingSections.filter(
    (existing) =>
      !templateSectionsData.some((section) => section.id === existing.id)
  );

  const updatedSections = await Promise.all(
    toUpdate.map((data) =>
      prisma.templateSection.update({
        where: { id: data.id },
        data: {
          sectionTypeId: data.sectionTypeId,
          requiresImage: data.requiresImage,
        },
      })
    )
  );

  const createdSections = await Promise.all(
    toCreate.map((data) =>
      prisma.templateSection.create({
        data: {
          templateId: data.templateId,
          sectionTypeId: data.sectionTypeId,
          requiresImage: data.requiresImage,
        },
      })
    )
  );

  await Promise.all(
    toDelete.map((data) =>
      prisma.templateSection.delete({
        where: { id: data.id },
      })
    )
  );

  return [...updatedSections, ...createdSections];
};
