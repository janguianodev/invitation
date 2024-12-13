"use server";

import { DenyAssistanceInputs } from "@/components/ui/modals/utils/deny-assistance";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type DenyAssistanceProps = DenyAssistanceInputs & {
  guestSlug: string;
  coupleSlug: string;
};

export const denyAssistance = async (data: DenyAssistanceProps) => {
  try {
    await prisma.guest.update({
      where: {
        guestSlug: data.guestSlug,
      },
      data: {
        message: data.message,
        confirmedPeople: 0,
      },
    });

    revalidatePath(`/invitation/${data.coupleSlug}/${data.guestSlug}`);
    revalidatePath(`/guests`);

    return {
      ok: true,
      message:
        "Es una pena que no puedas asistir, sin embargo, agregamos tu respuesta a nuestra invitación",
    };
  } catch (error) {
    console.error(error);
    return { ok: false, error: "Ocurrió un error, intenta de nuevo" };
  }
};
