"use server";

import { GuestFormInputs } from "@/app/(authenticated)/guests/[guestId]/utils/schema";
import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export const createOrUpdateGuest = async (data: GuestFormInputs) => {
  const session = await auth();

  try {
    const invitation = await prisma.invitation.findFirst({
      where: {
        createdByUserId: session?.user.id,
      },
    });

    if (!invitation) {
      return {
        ok: false,
        error: "No se encontró la invitación de ese invitado",
      };
    }

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
          invitationId: invitation.id,
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
            invitationId: invitation.id,
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
          invitationId: invitation.id,
        },
      });

      if (guestPasses.length > 0) {
        await prisma.guest.createMany({
          data: guestPasses.map((pass, index) => ({
            name: pass.name,
            guestSlug: `${slug}-${index}`,
            invitationId: invitation.id,
            parentGroupId: guest.id,
          })),
        });

        revalidatePath("/guests");
        return { ok: true, guests: { ...guest, guestPasses } };
      }
    }

    revalidatePath("/guests");
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
