"use server";

import prisma from "@/lib/prisma";

export const getGuestsSummary = async () => {
  try {
    const attendingCount = await prisma.guest.count({
      where: { confirmedPeople: { gt: 0 }, deletedAt: null },
    });

    const notAttendingCount = await prisma.guest.count({
      where: { confirmedPeople: 0, invitedPeople: { gt: 0 }, deletedAt: null },
    });

    const pendingCount = await prisma.guest.count({
      where: { confirmedPeople: null, deletedAt: null },
    });

    const totalCount = await prisma.guest.count({
      where: { deletedAt: null },
    });

    return {
      attending: attendingCount,
      notAttending: notAttendingCount,
      pending: pendingCount,
      total: totalCount,
    };
  } catch (error) {
    console.error("Error al obtener el summary:", error);
    throw new Error("Error al obtener el summary");
  }
};
