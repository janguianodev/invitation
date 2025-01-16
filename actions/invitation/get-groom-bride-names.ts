"use server";

import prisma from "@/lib/prisma";

export const getGroomBrideNames = async (invitation_slug: string) => {
  try {
    const invitation = await prisma.invitation.findUnique({
      where: { id: invitation_slug },
      select: {
        couple: {
          select: {
            partner1Name: true,
            partner2Name: true,
          },
        },
      },
    });

    const brideName = invitation?.couple?.partner1Name;
    const groomName = invitation?.couple?.partner2Name;

    return { brideName, groomName };
  } catch (error) {
    console.error("Error al obtener los nombres de los novios:", error);
    throw new Error("Error al obtener los nombres de los novios");
  }
};
