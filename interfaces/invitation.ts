export interface InvitationDataI {
  id: string;
  eventDate: Date | null;
  welcomeMessage: string | null;
  groomParents: string | null;
  brideParents: string | null;
  guestMessage: string | null;
  specialRequest: string | null;
  dressCode: string | null;
  giftRegistryType: string | null;
  giftRegistryLink: string | null;
  giftRegistryMsg: string | null;
  bibleVerse: string | null;
  bibleReference: string | null;
  recomendedLodging: string | null;
  recomendedLodgingLink: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  coupleId: string | null;
  couple: Couple | null;
  createdByUserId: string | null;
  event: EventI[];
  guests: GuestI;
}

export interface EventI {
  id: number;
  eventType: string | null;
  eventTime: string | null;
  eventLocation: string | null;
  eventAddress: string | null;
  eventAddressLink: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  invitationId: string;
}

export interface Couple {
  id: string;
  coupleSlug: string;
  partner1Name: string;
  partner2Name: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  userId: string | null;
}

export interface GuestI {
  invited: number | null;
  confirmed: number | null;
  confirmationCode: string | null;
  confirmedGuestsNames: string[];
}
