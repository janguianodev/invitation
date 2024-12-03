"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteGuest = async (id: string) => {
  try {
    const guest = await prisma.guest.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    revalidatePath("/guests");
    return { ok: true, guest };
  } catch (error) {
    console.error("Error eliminar invitado:", error);
    return { ok: false, error: "Fallo al eminimar invitado" };
  }
};
