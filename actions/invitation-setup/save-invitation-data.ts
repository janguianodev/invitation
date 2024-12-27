"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { uploadImages } from "../images/upload-images";
import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

interface EventI {
  eventType: string;
  eventTime: string;
  eventLocation: string;
  eventAddress: string;
  eventAddressLink: string;
}

export const saveInvitationData = async (formData: FormData) => {
  const session = await auth();
  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = Object.fromEntries(formData.entries());
    const { id, brideName, groomName, eventDate, itinerary, ...rest } = data;

    const imageFields = [
      "brideImage",
      "eventDateImage",
      "bibleImage",
      "specialRequestImage",
    ];

    const uploadedImages: Record<string, string> = {};

    // Obtener y subir imagenes del formulario
    for (const field of imageFields) {
      const file = formData.get(field) as File;
      if (file && file.size > 0) {
        const imageUrl = await uploadImages([file], "invitations");
        if (imageUrl && imageUrl.length > 0 && imageUrl[0]) {
          uploadedImages[field] = imageUrl[0];
        }
      }
    }

    // Verificar formatos
    const parsedEventDate =
      eventDate && typeof eventDate === "string" ? new Date(eventDate) : null;
    const parsedItinerary =
      itinerary && typeof itinerary === "string" ? JSON.parse(itinerary) : [];

    // Validar modelo de formato en Prisma
    const formattedItinerary = parsedItinerary.map((event: EventI) => {
      const eventDateTime = new Date(`${eventDate}T${event.eventTime}:00.000Z`);
      return {
        ...event,
        eventTime: eventDateTime,
      };
    });

    const result = await prisma.$transaction(async (tx) => {
      // Crear o actualizar la invitación
      const invitation = id
        ? await tx.invitation.update({
            where: { id: id as string },
            data: {
              ...rest,
              ...uploadedImages,
              eventDate: parsedEventDate,
              updatedAt: new Date(),
            },
          })
        : await tx.invitation.create({
            data: {
              ...rest,
              ...uploadedImages,
              eventDate: parsedEventDate,
              createdByUserId: session.user.id,
            },
          });

      // Eliminar eventos antiguos
      if (id) {
        await tx.event.deleteMany({
          where: { invitationId: invitation.id },
        });
      }

      // Insertar nuevos eventos
      if (formattedItinerary.length > 0) {
        await tx.event.createMany({
          data: formattedItinerary.map((event: object) => ({
            ...event,
            invitationId: invitation.id,
          })),
        });
      }

      // Crear o actualizar la pareja asociada a la invitación
      const couple = await tx.couple.upsert({
        where: { userId: session.user.id },
        create: {
          coupleSlug: createCoupleSlug(
            brideName as string,
            groomName as string
          ),
          partner1Name: brideName as string,
          partner2Name: groomName as string,
          userId: session.user.id,
          invitation: { connect: { id: invitation.id } },
        },
        update: {
          partner1Name: brideName as string,
          partner2Name: groomName as string,
          updatedAt: new Date(),
        },
      });

      // Actualizar la invitación con el coupleId
      const updatedInvitation = await tx.invitation.update({
        where: { id: invitation.id },
        data: {
          coupleId: couple.id,
        },
      });

      return { updatedInvitation, couple };
    });

    revalidatePath("/my-invitations");
    revalidatePath(`/my-invitations/${id}`);

    return {
      ok: true,
      updatedData: {
        invitation: result.updatedInvitation,
        couple: result.couple,
      },
    };
  } catch (error) {
    console.error("Error al guardar la data en invitation:", error);
    return { ok: false, error: "Error al guargar invitacion" };
  }
};

const createCoupleSlug = (brideName: string, groomName: string) => {
  const bride = brideName.toLowerCase().split(" ")[0];
  const groom = groomName.toLowerCase().split(" ")[0];

  return `${bride}y${groom}-${nanoid(8)}`;
};
