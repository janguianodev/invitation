export interface GuestI {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  invitedPeople?: number | null;
  confirmedPeople?: number | null;
  invitation?: {
    id: number;
    eventDate: Date | null;
    welcomeMessage?: string | null;
  };
  invitationId?: number;
}
