"use server";

import { auth } from "@/auth.config";
import { InvitationsI } from "@/interfaces/invitations";
import prisma from "@/lib/prisma";

export const getUserInvitations = async (): Promise<InvitationsI[]> => {
  const user = await auth();

  try {
    const invitations = await prisma.invitation.findMany({
      include: {
        couple: true,
        template: {
          include: {
            templateSections: {
              include: {
                sectionType: true,
              },
            },
            image: true,
            createdByUser: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
        createdByUser: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      where: {
        deletedAt: null,
        createdByUserId: user?.user.id,
      },
    });

    return invitations.map((invitation) => {
      return {
        id: invitation.id,
        eventDate: invitation.eventDate,
        welcomeMessage: invitation.welcomeMessage,
        groomParents: invitation.groomParents,
        brideParents: invitation.brideParents,
        guestMessage: invitation.guestMessage,
        specialRequest: invitation.specialRequest,
        dressCode: invitation.dressCode,
        giftRegistryType: invitation.giftRegistryType,
        giftRegistryLink: invitation.giftRegistryLink,
        giftRegistryMsg: invitation.giftRegistryMsg,
        bibleVerse: invitation.bibleVerse,
        bibleReference: invitation.bibleReference,
        primaryColor: invitation.primaryColor,
        secondaryColor: invitation.secondaryColor,
        recomendedLodging: invitation.recomendedLodging,
        recomendedLodgingLink: invitation.recomendedLodgingLink,
        createdAt: invitation.createdAt,
        updatedAt: invitation.updatedAt,
        coupleId: invitation.coupleId,
        templateId: invitation.templateId,
        createdByUserId: invitation.createdByUserId,
        couple: invitation.couple,
        template: {
          templateId: invitation.template.id,
          templateName: invitation.template.templateName,
          description: invitation.template.description,
          previewImageUrl: invitation.template.image[0].imageUrl,
          createdAt: invitation.template.createdAt,
          createdBy: invitation.template.createdByUser,
          sections: invitation.template.templateSections.map((section) => {
            return {
              sectionId: section.id,
              sectionName: section.sectionType.name,
              requiresImage: section.requiresImage,
              description: section.sectionType.description,
            };
          }),
        },
        createdByUser: invitation.createdByUser,
      };
    });
  } catch (error) {
    console.log("Error obteniendo invitaciones", error);
    throw new Error("Error obteniendo invitaciones");
  }
};
