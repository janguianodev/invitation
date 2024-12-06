"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getCoupleSlug = async () => {
  const session = await auth();

  try {
    const couple = await prisma.couple.findFirst({
      where: {
        userId: session?.user.id,
      },
    });

    if (!couple) {
      return { ok: false, error: "No se encontró la pareja" };
    }

    return { ok: true, coupleSlug: couple.coupleSlug };
  } catch (error) {
    console.error("Error al obtener el slug de la pareja:", error);
    return { ok: false, error: "Error al obtener el slug de la pareja" };
  }
};
