import { InvitationDataI } from "../interfaces/invitation";
import {
  DressCode,
  EventCountdown,
  Footer,
  Gift,
  GroomBrideParents,
  InvitationHeader,
  Itinerary,
  MessageToGest,
  SpecialPhrase,
  SpecialRequest,
  WelcomeMessage,
} from "@/components";
import { Assistance } from "@/components/invitation/Assistance";

interface Props {
  invitationData: InvitationDataI;
}

export const Template1 = ({ invitationData }: Props) => {
  return (
    <>
      {/* Header */}
      <InvitationHeader
        data={{
          eventDate: invitationData.eventDate || new Date(),
          partner1Name: invitationData.couple?.partner1Name || "",
          partner2Name: invitationData.couple?.partner2Name || "",
          image: invitationData.brideImage || "",
        }}
      />

      {/* Mensaje de bienvenida */}
      <WelcomeMessage welcomeMessage={invitationData.welcomeMessage || ""} />

      {/* Frase de los novios */}
      <SpecialPhrase
        data={{
          bibleReference: invitationData.bibleReference || "",
          bibleVerse: invitationData.bibleVerse || "",
          image: invitationData.bibleImage || "",
        }}
      />

      {/* Padres de los novios */}
      <GroomBrideParents
        data={{
          brideParents: invitationData.brideParents || "",
          groomParents: invitationData.groomParents || "",
        }}
      />

      {/* Mensaje al invitado */}
      <MessageToGest guestMessage={invitationData.guestMessage || ""} />

      {/* Countdown para la boda */}
      <EventCountdown
        eventDate={invitationData.eventDate || new Date()}
        image={invitationData.eventDateImage || ""}
      />

      {/* itinerario */}
      <Itinerary events={invitationData.event} />

      {/* código de vestimenta */}
      <DressCode dressCode={invitationData.dressCode || ""} />

      {/* No niños o información importante para los invitados */}
      <SpecialRequest
        specialRequest={invitationData.specialRequest || ""}
        image={invitationData.specialRequestImage || ""}
      />

      {/* Regalo o contribución */}
      <Gift
        data={{
          giftRegistryType: invitationData.giftRegistryType || "",
          giftRegistryLink: invitationData.giftRegistryLink || "",
          giftRegistryMsg: invitationData.giftRegistryMsg || "",
        }}
      />

      <Assistance
        data={{
          confirmationCode: invitationData.guests.confirmationCode || "",
          confirmedGuests: invitationData.guests.confirmed,
          confirmedGuestsNames:
            invitationData.guests.confirmedGuestsNames || [],
          invitedGuests: invitationData.guests.invited || 0,
        }}
      />

      <Footer />
    </>
  );
};
