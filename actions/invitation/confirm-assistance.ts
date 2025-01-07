"use server";

import { ConfirmAssistanceInputs } from "@/components/ui/modals/utils/confirm-assistance-schema";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type DenyAssistanceProps = ConfirmAssistanceInputs & {
  guestSlug: string;
  coupleSlug: string;
};

export const confirmAssistance = async (invitedPeople: DenyAssistanceProps) => {
  try {
    const mainGuest = await prisma.guest.findUnique({
      where: {
        guestSlug: invitedPeople.guestSlug,
      },
    });

    if (!mainGuest) {
      return {
        ok: false,
        error: "No se encontró el invitado",
      };
    }

    const getAllGuests = await prisma.guest.findMany({
      where: {
        parentGroupId: mainGuest.id,
      },
    });

    const confirmedGuests = invitedPeople.guestPasses || [];
    const updates = getAllGuests.map((guest, index) => {
      const isConfirmed = index < invitedPeople.confirmedGuests;

      return prisma.guest.update({
        where: {
          id: guest.id,
        },
        data: {
          name: isConfirmed ? confirmedGuests[index]?.name || "" : undefined,
          confirmedPeople: isConfirmed ? 1 : null,
        },
      });
    });

    await Promise.all(updates);

    await prisma.guest.update({
      where: {
        id: mainGuest.id,
      },
      data: {
        confirmedPeople: invitedPeople.confirmedGuests,
        confirmationCode: await generateConfirmationCode(
          mainGuest.name,
          mainGuest.id
        ),
      },
    });

    revalidatePath(
      `/invitation/${invitedPeople.coupleSlug}/${invitedPeople.guestSlug}`
    );
    revalidatePath(`/guests`);

    return {
      ok: true,
      message: "Gracias por confirmar tu asistencia",
    };
  } catch (error) {
    console.error("Error updating guest information:", error);
    return {
      ok: false,
      error: "Ocurrió un error, intenta de nuevo",
    };
  }
};

export const generateConfirmationCode = async (
  mainGuestName: string,
  mainGuestId: string
) => {
  const initials = mainGuestName
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");
  const code = mainGuestId.slice(-5).toUpperCase();

  return `${initials}-${code}`;
};
