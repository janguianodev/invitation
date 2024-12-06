"use server";

import prisma from "@/lib/prisma";

export const getGuestsSummary = async () => {
  try {
    const attendingCount = await getAttendingGuests();

    const notAttendingCount = await getNotAttendingGuests();

    const pendingCount = await prisma.guest.count({
      where: { confirmedPeople: null, deletedAt: null, isGroup: true },
    });

    const totalCount = await prisma.guest.count({
      where: { deletedAt: null, isGroup: false },
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

const getAttendingGuests = async () => {
  const attendees = await prisma.guest.findMany({
    where: { confirmedPeople: { gt: 0 }, deletedAt: null, isGroup: true },
  });

  return attendees.reduce(
    (acc, group) => acc + (group.confirmedPeople || 0),
    0
  );
};

const getNotAttendingGuests = async () => {
  const groups = await prisma.guest.findMany({
    where: { isGroup: true, deletedAt: null, confirmedPeople: { not: null } },
    select: {
      invitedPeople: true,
      confirmedPeople: true,
    },
  });

  // Calculate the total number of invited and confirmed people
  let totalInvited = 0;
  let totalConfirmed = 0;

  groups.forEach((group) => {
    totalInvited += group.invitedPeople || 0;
    totalConfirmed += group.confirmedPeople || 0;
  });

  const notAttending = totalInvited - totalConfirmed;

  return notAttending;
};
