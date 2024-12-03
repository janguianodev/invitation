"use server";

import prisma from "@/lib/prisma";

export const getGuestsByInvitationId = async (invitationId: number) => {
  try {
    const guests = await prisma.guest.findMany({
      where: {
        invitationId: invitationId,
        deletedAt: null,
      },
      include: {
        invitation: true,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!guests) return [];

    return guests;
  } catch (error) {
    console.log(`Error al obtener los invitados por el invitationId ${invitationId}`, error);
    throw new Error("Error al obtener los invitados por el invitationId");
  }
};
