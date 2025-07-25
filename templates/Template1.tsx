import { InvitationDataI } from "../interfaces/invitation";
import {
  CountdownT1,
  DressCode,
  DresscodeT1,
  EventCountdown,
  Footer,
  Gift,
  GroomBrideParents,
  GuestMessageT1,
  HeaderT1,
  InvitationHeader,
  Itinerary,
  ItineraryT1,
  MessageT1,
  MessageToGest,
  ParentsT1,
  PhraseT1,
  SpecialPhrase,
  SpecialRequest,
  SpecialRequestT1,
  WelcomeMessage,
  FooterT1,
  AssistanceSection,
  Assistance,
} from "@/components";
import { GiftT1 } from "../components/invitation/template1/GiftT1";
import { cursiveFont, template1Font } from "@/fonts";

interface Props {
  invitationData: InvitationDataI;
}

const placeholderImages = {
  brideImage: "https://placehold.co/300?text=imagen+principal",
  eventDateImage: "https://placehold.co/300?text=imagen+fecha",
  bibleImage: "https://placehold.co/300?text=imagen+biblia",
  specialRequestImage: "https://placehold.co/300?text=imagen+especial",
};

export const Template1 = ({ invitationData }: Props) => {
  const data = {
    header: {
      eventDate: invitationData.eventDate || new Date(),
      partner1Name: invitationData.couple?.partner1Name || "",
      partner2Name: invitationData.couple?.partner2Name || "",
      image: invitationData.brideImage || placeholderImages.brideImage,
    },
    welcomeMessage: {
      welcomeMessage: invitationData.welcomeMessage || "",
    },
    specialPhrase: {
      bibleReference: invitationData.bibleReference || "",
      bibleVerse: invitationData.bibleVerse || "",
      image: invitationData.bibleImage || placeholderImages.bibleImage,
    },
    groomBrideParents: {
      brideParents: invitationData.brideParents || "",
      groomParents: invitationData.groomParents || "",
    },
    guestMessage: {
      guestMessage: invitationData.guestMessage || "",
    },
    eventCountdown: {
      eventDate: invitationData.eventDate || new Date(),
      image: invitationData.eventDateImage || placeholderImages.eventDateImage,
    },
    itinerary: {
      events: invitationData.event || [],
    },
    dressCode: {
      dressCode: invitationData.dressCode || "",
    },
    specialRequest: {
      specialRequest: invitationData.specialRequest || "",
      image:
        invitationData.specialRequestImage ||
        placeholderImages.specialRequestImage,
    },
    gift: {
      giftRegistryType: invitationData.giftRegistryType || "",
      giftRegistryLink: invitationData.giftRegistryLink || "",
      giftRegistryMsg: invitationData.giftRegistryMsg || "",
    },
    assistance: {
      data: {
        confirmationCode: invitationData.guests.confirmationCode || "",
        confirmedGuests: invitationData.guests.confirmed,
        confirmedGuestsNames: invitationData.guests.confirmedGuestsNames || [],
        invitedGuests: invitationData.guests.invited || 0,
      },
      customUI: {
        template: "invitation",
        fontClass: template1Font.className,
        cursiveFontClass: cursiveFont.className,
      },
    },
    footer: {
      partner1Name: invitationData.couple?.partner1Name || "",
      partner2Name: invitationData.couple?.partner2Name || "",
    },
  };

  return (
    <>
      {/* Header */}
      <InvitationHeader>
        <HeaderT1 data={data.header} />
      </InvitationHeader>

      {/* Mensaje de bienvenida */}
      <WelcomeMessage>
        <MessageT1 data={data.welcomeMessage} />
      </WelcomeMessage>

      {/* Frase de los novios */}
      <SpecialPhrase>
        <PhraseT1 data={data.specialPhrase} />
      </SpecialPhrase>

      {/* Padres de los novios */}
      <GroomBrideParents>
        <ParentsT1 data={data.groomBrideParents} />
      </GroomBrideParents>

      {/* Mensaje al invitado */}
      <MessageToGest>
        <GuestMessageT1 data={data.guestMessage} />
      </MessageToGest>

      {/* Countdown para la boda */}
      <EventCountdown>
        <CountdownT1 data={data.eventCountdown} />
      </EventCountdown>

      {/* itinerario */}
      <Itinerary>
        <ItineraryT1 data={data.itinerary} />
      </Itinerary>

      {/* código de vestimenta */}
      <DressCode>
        <DresscodeT1 data={data.dressCode} />
      </DressCode>

      {/* No niños o información importante para los invitados */}
      <SpecialRequest>
        <SpecialRequestT1 data={data.specialRequest} />
      </SpecialRequest>

      {/* Regalo o contribución */}
      <Gift>
        <GiftT1 data={data.gift} />
      </Gift>

      <AssistanceSection>
        <Assistance
          data={data.assistance.data}
          customUI={data.assistance.customUI}
        />
      </AssistanceSection>

      <Footer>
        <FooterT1 data={data.footer} />
      </Footer>
    </>
  );
};
