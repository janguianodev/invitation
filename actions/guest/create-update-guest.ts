"use server";

import { GuestFormInputs } from "@/app/(authenticated)/my-invitations/[invitation_slug]/guests/[guestId]/utils/schema";
import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { generateConfirmationCode } from "../invitation/confirm-assistance";

export const createOrUpdateGuest = async (
  data: GuestFormInputs,
  invitation_slug: string
) => {
  try {
    const { id, name, guestPasses, confirmedPeople, ...rest } = data;

    const newSlug = generateSlug(name);

    if (id) {
      const guest = await prisma.guest.update({
        where: {
          id,
        },
        data: {
          ...rest,
          name,
          guestSlug: newSlug,
          invitationId: invitation_slug,
          confirmedPeople: confirmedPeople ?? null,
          confirmationCode: confirmedPeople
            ? await generateConfirmationCode(name, id, confirmedPeople)
            : null,
        },
      });

      if (guestPasses.length > 0) {
        await prisma.guest.deleteMany({
          where: {
            parentGroupId: guest.id,
          },
        });

        await prisma.guest.createMany({
          data: guestPasses.map((pass, index) => ({
            name: pass.name,
            guestSlug: `${newSlug}-${index}`,
            invitationId: invitation_slug,
            parentGroupId: guest.id,
            confirmedPeople: pass.confirmedPeople ?? null,
          })),
        });

        revalidatePath("/guests");
        return { ok: true, guests: { ...guest, guestPasses } };
      }
    } else {
      const guest = await prisma.guest.create({
        data: {
          ...rest,
          name,
          guestSlug: newSlug,
          invitationId: invitation_slug,
        },
      });

      if (guestPasses.length > 0) {
        await prisma.guest.createMany({
          data: guestPasses.map((pass, index) => ({
            name: pass.name,
            guestSlug: `${newSlug}-${index}`,
            invitationId: invitation_slug,
            parentGroupId: guest.id,
          })),
        });

        revalidatePath("/guests");
        return { ok: true, guests: { ...guest, guestPasses } };
      }
    }

    revalidatePath(`/guests`);
    return { ok: true, guests: {} };
  } catch (error) {
    console.error("Error crear/actualizar invitado:", error);
    return { ok: false, error: "Fallo crear o actualizar invitado" };
  }
};

const generateSlug = (name: string): string => {
  const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const baseSlug = normalized.toLowerCase().trim().replace(/\s+/g, "-");

  return `${baseSlug}-${nanoid(8)}`;
};
