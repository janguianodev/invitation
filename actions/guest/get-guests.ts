"use server";

import prisma from "@/lib/prisma";

export const getGuestsByInvitationId = async (invitation_slug: string) => {
  try {
    const guests = await prisma.guest.findMany({
      where: {
        invitationId: invitation_slug,
        deletedAt: null,
        isGroup: true,
      },
      include: {
        invitation: {
          select: {
            couple: {
              select: {
                coupleSlug: true,
              },
            },
          },
        },
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
