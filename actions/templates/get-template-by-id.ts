"use server";

// import prisma from "@/lib/prisma";

export const getTemplateById = async () =>
  // id: string
  {
    // try {
    //   const parsedId = parseInt(id);
    //   if (isNaN(parsedId)) return null;
    //   const template = await prisma.template.findUnique({
    //     where: { id: parsedId, deletedAt: null },
    //     include: {
    //       templateSections: {
    //         include: {
    //           sectionType: true,
    //         },
    //       },
    //       image: {
    //         select: {
    //           id: true,
    //           imageUrl: true,
    //         },
    //         where: {
    //           deletedAt: null,
    //         },
    //       },
    //     },
    //   });
    //   if (!template) return null;
    //   return {
    //     ...template,
    //     templateImage: template.image[0]?.imageUrl ?? "",
    //     templateSections: template?.templateSections.map((section) => ({
    //       id: section.id,
    //       sectionName: section.sectionType.name,
    //       requiresImage: section.requiresImage,
    //     })),
    //   };
    // } catch (error) {
    //   console.log(`Error getting template by id ${id}`, error);
    //   throw new Error("Error getting template by id");
    // }
  };
