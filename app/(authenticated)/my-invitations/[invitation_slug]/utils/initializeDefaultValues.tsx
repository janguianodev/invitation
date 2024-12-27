import { InvitationSetupFormI, InvitationsI } from "@/interfaces";
import { invitationSetupInitialValues } from "./initialValues";
import { validateImageSrc } from "./validateImgSrc";
import { InvitationImages } from "@/interfaces/invitation-setup-form";

export const initializeDefaultValues = (
  slug: string,
  invitation: Partial<InvitationsI | unknown>
): InvitationSetupFormI & InvitationImages => {
  const invitationTyped = invitation as Partial<InvitationsI>;

  if (slug === "new") {
    return invitationSetupInitialValues;
  }

  return {
    ...invitationTyped,
    eventDate: invitationTyped.eventDate
      ? new Date(invitationTyped.eventDate).toISOString().split("T")[0]
      : "",
    brideName: invitationTyped.couple?.partner1Name || "",
    groomName: invitationTyped.couple?.partner2Name || "",
    brideImage: validateImageSrc(invitationTyped.brideImage as string),
    eventDateImage: validateImageSrc(invitationTyped.eventDateImage as string),
    bibleImage: validateImageSrc(invitationTyped.bibleImage as string),
    specialRequestImage: validateImageSrc(
      invitationTyped.specialRequestImage as string
    ),
    itinerary: invitationTyped.itinerary?.map((event) => ({
      ...event,
      eventId: event.id,
      eventTime: event.eventTime
        ? new Date(event.eventTime).toISOString().slice(11, 16)
        : "",
    })),
  };
};
