"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteGuest = async (id: string) => {
  try {
    const guest = await prisma.guest.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    const guestPass = await prisma.guest.updateMany({
      where: { parentGroupId: id },
      data: { deletedAt: new Date() },
    });

    revalidatePath("/guests");

    return {
      ok: true,
      guest: {
        ...guest,
        guestPasses: guestPass,
      },
    };
  } catch (error) {
    console.error("Error eliminar invitado:", error);
    return { ok: false, error: "Fallo al eminimar invitado" };
  }
};
