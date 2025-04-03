export interface GuestI {
  id: string;
  name: string | null;
  phoneNumber: string | null;
  invitedPeople: number | null;
  confirmedPeople?: number | null;
  invitationId?: string | null;
  guestSlug?: string | null;
  message: string | null;
  invitation: {
    couple: {
      coupleSlug: string | null;
    } | null;
  };
  groupMembers: {
    name: string | null;
  }[];
}
