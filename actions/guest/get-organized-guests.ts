"use server";

import prisma from "@/lib/prisma";

export const getOrganizedGuestsByInvitationId = async (
  invitation_slug: string
) => {
  try {
    const guests = await prisma.guest.findMany({
      where: {
        invitationId: invitation_slug,
        deletedAt: null,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!guests) return [];

    const organizedGuests = guests
      .filter((guest) => guest.isGroup)
      .map((group) => {
        const relatedGuests = guests.filter(
          (guest) => guest.parentGroupId === group.id
        );

        const confirmedGuestNames = relatedGuests
          .filter((guest) => guest.confirmedPeople && guest.confirmedPeople > 0)
          .map((guest) => guest.name);

        return {
          groupName: group.name,
          phoneNumber: group.phoneNumber || "",
          invited: group.invitedPeople?.toString() || "0",
          confirmed: confirmedGuestNames.length,
          confirmationCode: group.confirmationCode || "Sin Confirmar",
          guests: confirmedGuestNames.join("\n"),
        };
      });

    return organizedGuests;
  } catch (error) {
    console.log(
      `Error al obtener y organizar los invitados de la invitación: ${error}`,
      error
    );
    throw new Error(
      "Error al obtener y organizar los invitados de la invitación"
    );
  }
};
