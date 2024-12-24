export interface InvitationSetupFormI {
  brideName: string;
  groomName: string;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  eventDate: string | null;
  welcomeMessage?: string | null;
  bibleVerse?: string | null;
  brideImage?: string | undefined | FileList;
  eventDateImage?: string | undefined | FileList;
  bibleImage?: string | undefined | FileList;
  specialRequestImage?: string | undefined | FileList;
  bibleReference?: string | null;
  brideParents?: string | null;
  groomParents?: string | null;
  guestMessage?: string | null;
  dressCode?: string | null;
  specialRequest?: string | null;
  itinerary?: Itinerary[];
  giftRegistryType?: string | null;
  giftRegistryLink?: string | null;
  giftRegistryMsg?: string | null;
}

export interface Itinerary {
  id?: number;
  eventType: string | null;
  eventTime: string | null | Date;
  eventLocation: string | null;
  eventAddress: string | null;
  eventAddressLink: string | null;
}

export interface InvitationImages {
  brideImage: string | undefined | FileList;
  bibleImage: string | undefined | FileList;
  eventDateImage: string | undefined | FileList;
  specialRequestImage: string | undefined | FileList;
}
