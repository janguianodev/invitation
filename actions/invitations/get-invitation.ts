"use server";

import prisma from "@/lib/prisma";

export const getInvitation = async (invitationId: string) => {
  try {
    const invitation = await prisma.invitation.findUnique({
      where: {
        id: invitationId,
      },
      include: {
        couple: true,
        event: true,
      },
    });

    return {
      ...invitation,
      itinerary: invitation?.event.map((event) => {
        return {
          id: event.id,
          eventType: event.eventType,
          eventTime: event.eventTime,
          eventLocation: event.eventLocation,
          eventAddress: event.eventAddress,
          eventAddressLink: event.eventAddressLink,
        };
      }),
    };
  } catch (error) {
    console.error("Error obteniendo las secciones de la invitación", error);
    throw new Error("Error obteniendo las secciones de la invitación");
  }
};
