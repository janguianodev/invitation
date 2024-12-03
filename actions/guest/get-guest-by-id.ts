"use server";

import prisma from "@/lib/prisma";

export const getGuestByIdAndInvitation = async (
  guestId: string,
  invitationId: number
) => {
  try {
    const guest = await prisma.guest.findFirst({
      where: {
        id: guestId,
        invitationId: invitationId,
        deletedAt: null,
      },
      include: {
        invitation: true,
      },
    });

    if (!guest) return undefined;

    return {
      id: guest.id,
      firstName: guest.firstName ?? "",
      lastName: guest.lastName ?? "",
      email: guest.email ?? "",
      phoneNumber: guest.phoneNumber ?? "",
      invitedPeople: guest.invitedPeople ?? 0,
      confirmedPeople: guest.confirmedPeople ?? 0,
      confirmationCode:
        typeof guest.confirmationCode === "string"
          ? parseInt(guest.confirmationCode, 10) || undefined
          : guest.confirmationCode ?? undefined,
      guestSlug: guest.guestSlug,
      createdAt: guest.createdAt,
      updatedAt: guest.updatedAt,
      invitation: {
        id: guest.invitation.id,
        eventDate: guest.invitation.eventDate,
        welcomeMessage: guest.invitation.welcomeMessage ?? null,
      },
    };
  } catch (error) {
    console.error(
      `Error obtener invitado por id ${guestId} y invitationId ${invitationId}`,
      error
    );
    throw new Error("Error obtener invitado por id e invitationId");
  }
};
