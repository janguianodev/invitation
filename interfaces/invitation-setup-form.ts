export interface InvitationSetupFormI {
  brideName: string;
  groomName: string;
  primaryColor: string;
  secondaryColor: string;
  eventDate: string;
  welcomeMessage: string;
  bibleVerse: string;
  bibleReference: string;
  brideParents: string;
  groomParents: string;
  guestMessage: string;
  dressCode: string;
  specialRequest: string;
  itinerary: Itinerary[];
  giftTable: GiftTable;
}

export interface Itinerary {
  eventType: string;
  eventTime: string;
  eventLocation: string;
  eventAddress: string;
  eventAddressLink: string;
}

export interface GiftTable {
  message: string;
  type: string;
  link: string;
}
