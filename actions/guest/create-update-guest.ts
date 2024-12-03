"use server";

import { GuestFormInputs } from "@/app/(authenticated)/guests/[guestId]/utils/schema";
import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export const createOrUpdateGuest = async (
  data: GuestFormInputs,
  invitationId: number
) => {
  try {
    const { id, guestSlug, firstName, lastName, confirmationCode, ...rest } =
      data;

    const slug =
      guestSlug || generateSlug(firstName || "N/A", lastName || "N/A");

    const normalizedData = {
      ...rest,
      firstName,
      lastName,
      guestSlug: slug,
      updatedAt: new Date(),
      invitationId: invitationId,
      confirmationCode:
        confirmationCode !== undefined
          ? confirmationCode.toString()
          : undefined,
    };

    const guest = id
      ? await prisma.guest.update({
          where: { id },
          data: normalizedData,
        })
      : await prisma.guest.create({
          data: normalizedData,
        });

    revalidatePath("/guests");
    return { ok: true, guest };
  } catch (error) {
    console.error("Error crear/actualizar invitado:", error);
    return { ok: false, error: "Fallo crear o actualizar invitado" };
  }
};

const generateSlug = (firstName: string, lastName: string): string => {
  const baseSlug = `${firstName}-${lastName}`
    .toLowerCase()
    .replace(/\s+/g, "-");
  return `${baseSlug}-${nanoid(8)}`;
};
