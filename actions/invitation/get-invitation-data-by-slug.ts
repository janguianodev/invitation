"use server";

import prisma from "@/lib/prisma";

export const getInvitationDataBySlug = async (
  slug: string,
  guest_slug_id: string
) => {
  try {
    const couple = await prisma.couple.findFirst({
      where: {
        coupleSlug: slug,
        deletedAt: null,
      },
    });

    if (!couple) {
      return null;
    }

    const invitation = await prisma.invitation.findFirst({
      where: {
        coupleId: couple.id,
        deletedAt: null,
      },
      include: {
        event: true,
        couple: true,
      },
    });

    if (!invitation) {
      return null;
    }

    const guests = await prisma.guest.findMany({
      where: {
        invitationId: invitation.id,
        deletedAt: null,
        guestSlug: guest_slug_id,
      },
    });

    if (!guests.length) {
      return null;
    }

    const confirmedGuests = await prisma.guest.findMany({
      where: {
        parentGroupId: guests[0].id,
        confirmedPeople: {
          gt: 0,
        },
      },
    });

    return {
      ok: true,
      ...invitation,
      guests: {
        invited: guests[0].invitedPeople,
        confirmed: guests[0].confirmedPeople,
        confirmationCode: guests[0].confirmationCode,
        confirmedGuestsNames: confirmedGuests.map((guest) => guest.name),
      },
    };
  } catch (error) {
    console.error("Error getting invitation data by slug: ", error);
    return null;
  }
};
