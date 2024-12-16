"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getGuestsByInvitationId = async () => {
  const session = await auth();
  try {
    const invitation = await prisma.invitation.findFirst({
      where: {
        createdByUserId: session?.user.id,
      },
    });

    if (!invitation) return [];

    const guests = await prisma.guest.findMany({
      where: {
        invitationId: invitation?.id,
        deletedAt: null,
        isGroup: true,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!guests) return [];

    return guests;
  } catch (error) {
    console.log(
      `Error al obtener los invitados de la invitación: ${error}`,
      error
    );
    throw new Error("Error al obtener los invitados de la invitación");
  }
};
