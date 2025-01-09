"use server";

import prisma from "@/lib/prisma";

export const getCoupleSlug = async (invitationId: string) => {
  try {
    const invitation = await prisma.invitation.findUnique({
      where: {
        id: invitationId,
      },
      include: {
        couple: {
          select: {
            coupleSlug: true,
          },
        },
      },
    });

    if (!invitation) {
      return { ok: false, error: "No se encontró la invitación" };
    }

    return { ok: true, coupleSlug: invitation.couple?.coupleSlug };
  } catch (error) {
    console.error("Error al obtener el slug de la pareja:", error);
    return { ok: false, error: "Error al obtener el slug de la pareja" };
  }
};
