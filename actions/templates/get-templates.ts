"use server";

import { TemplatesI } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getTemplates = async (): Promise<TemplatesI[]> => {
  try {
    const templates = await prisma.template.findMany({
      include: {
        templateSections: {
          include: {
            sectionType: true,
          },
        },
        image: {
          where: {
            deletedAt: null,
          },
        },
        createdByUser: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return templates.map((template) => {
      return {
        templateId: template.id,
        templateName: template.templateName,
        description: template.description,
        previewImageUrl: template.image?.[0].imageUrl,
        createdAt: template.createdAt,
        createdBy: template.createdByUser,
        sections: template.templateSections.map((section) => {
          return {
            sectionId: section.id,
            sectionName: section.sectionType.name,
            requiresImage: section.requiresImage,
            description: section.sectionType.description,
          };
        }),
      };
    });
  } catch (error) {
    console.log("Error obteniendo templates", error);
    throw new Error("Error obteniendo templates");
  }
};
