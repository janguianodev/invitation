import { TemplatesI } from "./templates";

export interface InvitationsI {
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
  primaryColor: string | null;
  secondaryColor: string | null;
  recomendedLodging: string | null;
  recomendedLodgingLink: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  coupleId: string | null;
  templateId: number;
  createdByUserId: string | null;
  couple: CoupleI | null;
  template: TemplatesI;
  createdByUser: UserI | null;
}

export interface CoupleI {
  id?: string;
  coupleSlug?: string;
  partner1Name?: string;
  partner2Name?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export interface UserI {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}
