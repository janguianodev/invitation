"use server";

import prisma from "@/lib/prisma";

export const getGuestByIdAndInvitation = async (
  guestId: string,
  invitation_slug: string
) => {
  try {
    const guest = await prisma.guest.findFirst({
      where: {
        id: guestId,
        invitationId: invitation_slug,
        deletedAt: null,
      },
      include: {
        invitation: true,
      },
    });

    if (!guest) return undefined;

    const guestPasses = await prisma.guest.findMany({
      where: {
        parentGroupId: guest.id,
        deletedAt: null,
      },
    });

    return {
      id: guest.id,
      name: guest.name ?? "",
      phoneNumber: guest.phoneNumber ?? "",
      invitedPeople: guest.invitedPeople ?? 0,
      confirmedPeople: guest.confirmedPeople,
      confirmationCode: guest.confirmationCode ?? "",
      guestSlug: guest.guestSlug,
      createdAt: guest.createdAt,
      updatedAt: guest.updatedAt,
      isGroup: guest.isGroup,
      parentGroupId: guest.parentGroupId ?? null,
      invitation: {
        id: guest.invitation.id,
        eventDate: guest.invitation.eventDate,
        welcomeMessage: guest.invitation.welcomeMessage ?? null,
      },
      guestPasses: guestPasses.map((pass) => ({
        id: pass.id,
        name: pass.name ?? "",
        confirmedPeople: pass.confirmedPeople,
      })),
    };
  } catch (error) {
    console.error(`Error obtener invitado por id ${guestId}`, error);
    throw new Error("Error obtener invitado por id");
  }
};
