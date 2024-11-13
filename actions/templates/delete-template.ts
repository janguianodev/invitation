"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTemplate = async (templateId: number) => {
  try {
    await prisma.templateSection.updateMany({
      where: {
        templateId: templateId,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    const images = await prisma.image.findMany({
      where: {
        templateId: templateId,
        deletedAt: null,
      },
    });

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const image = images[i];

        await prisma.image.update({
          where: {
            id: image.id,
          },
          data: {
            deletedAt: new Date(),
          },
        });
      }
    }

    await prisma.template.update({
      where: {
        id: templateId,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    revalidatePath("/admin/templates");

    return {
      success: true,
      message: "Template eliminado correctamente",
    };
  } catch (error) {
    console.log("Error eliminando template", error);

    return {
      success: false,
      message: "Error eliminando template",
    };
  }
};
