"use server";

import prisma from "@/lib/prisma";

export const getInvitationSections = async (invitationId: string) => {
  try {
    const template = await prisma.invitation.findUnique({
      where: {
        id: invitationId,
      },
      select: {
        template: {
          include: {
            templateSections: {
              include: {
                sectionType: true,
              },
            },
          },
        },
      },
    });

    return template?.template.templateSections;
  } catch (error) {
    console.error("Error obteniendo las secciones de la invitación", error);
    throw new Error("Error obteniendo las secciones de la invitación");
  }
};
