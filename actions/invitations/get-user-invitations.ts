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
        brideImage: invitation.brideImage as string,
        eventDateImage: invitation.eventDateImage as string,
        bibleReference: invitation.bibleReference as string,
        bibleImage: invitation.bibleImage as string,
        specialRequestImage: invitation.specialRequestImage as string,
        recomendedLodging: invitation.recomendedLodging,
        recomendedLodgingLink: invitation.recomendedLodgingLink,
        createdAt: invitation.createdAt,
        updatedAt: invitation.updatedAt,
        coupleId: invitation.coupleId,
        createdByUserId: invitation.createdByUserId,
        couple: invitation.couple,
        createdByUser: invitation.createdByUser,
      };
    });
  } catch (error) {
    console.log("Error obteniendo invitaciones", error);
    throw new Error("Error obteniendo invitaciones");
  }
};
