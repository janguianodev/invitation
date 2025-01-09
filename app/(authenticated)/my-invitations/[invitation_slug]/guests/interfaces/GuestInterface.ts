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
      partner1Name: string | null;
      partner2Name: string | null;
    } | null;
  };
}
