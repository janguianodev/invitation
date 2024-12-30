"use server";

import { GuestFormInputs } from "@/app/(authenticated)/my-invitations/[invitation_slug]/guests/[guestId]/utils/schema";
import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export const createOrUpdateGuest = async (
  data: GuestFormInputs,
  invitation_slug: string
) => {
  try {
    const { id, guestSlug, name, guestPasses, ...rest } = data;

    const slug = guestSlug || generateSlug(name);

    if (id) {
      const guest = await prisma.guest.update({
        where: {
          id,
        },
        data: {
          ...rest,
          name,
          guestSlug: slug,
          invitationId: invitation_slug,
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
            guestSlug: `${slug}-${index}`,
            invitationId: invitation_slug,
            parentGroupId: guest.id,
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
          guestSlug: slug,
          invitationId: invitation_slug,
        },
      });

      if (guestPasses.length > 0) {
        await prisma.guest.createMany({
          data: guestPasses.map((pass, index) => ({
            name: pass.name,
            guestSlug: `${slug}-${index}`,
            invitationId: invitation_slug,
            parentGroupId: guest.id,
          })),
        });

        revalidatePath("/guests");
        return { ok: true, guests: { ...guest, guestPasses } };
      }
    }

    revalidatePath(`my-invitations/${invitation_slug}/guests`);
    return { ok: true, guests: {} };
  } catch (error) {
    console.error("Error crear/actualizar invitado:", error);
    return { ok: false, error: "Fallo crear o actualizar invitado" };
  }
};

const generateSlug = (name: string): string => {
  const baseSlug = name.toLowerCase().split(" ").join("_").replace(/\s+/g, "-");
  return `${baseSlug}-${nanoid(8)}`;
};
