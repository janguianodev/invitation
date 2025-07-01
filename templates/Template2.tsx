import { template2CursiveFont, template2Font } from "@/fonts";
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
  HeaderT2,
  ParentsT2,
  MessageT2,
  PhraseT2,
  GuestMessageT2,
  CountDownT2,
  ItineraryT2,
  DresscodeT2,
  SpecialRequestT2,
  GiftT2,
  FooterT2,
  AssistanceSection,
  Assistance,
} from "@/components";

interface Props {
  invitationData: InvitationDataI;
}

const placeholderImages = {
  brideImage: "https://placehold.co/300?text=imagen+principal",
  eventDateImage: "https://placehold.co/300?text=imagen+fecha",
  bibleImage: "https://placehold.co/300?text=imagen+biblia",
  specialRequestImage: "https://placehold.co/300?text=imagen+especial",
};

export const Template2 = ({ invitationData }: Props) => {
  const data = {
    customUI: {
      template: "template2",
      fontClass: template2Font.className,
      cursiveFontClass: template2CursiveFont.className,
    },
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
        template: "template2",
        fontClass: template2Font.className,
        cursiveFontClass: template2CursiveFont.className,
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
        <HeaderT2 data={data.header} />
      </InvitationHeader>

      {/* Mensaje de bienvenida */}
      <WelcomeMessage>
        <MessageT2 data={data.welcomeMessage} />
      </WelcomeMessage>

      {/* Frase de los novios */}
      <SpecialPhrase>
        <PhraseT2 data={data.specialPhrase} />
      </SpecialPhrase>

      {/* Padres de los novios */}
      <GroomBrideParents>
        <ParentsT2 data={data.groomBrideParents} />
      </GroomBrideParents>

      {/* Mensaje al invitado */}
      <MessageToGest>
        <GuestMessageT2 data={data.guestMessage} />
      </MessageToGest>

      {/* Countdown para la boda */}
      <EventCountdown>
        <CountDownT2 data={data.eventCountdown} />
      </EventCountdown>

      {/* itinerario */}
      <Itinerary>
        <ItineraryT2 data={data.itinerary} />
      </Itinerary>

      {/* código de vestimenta */}
      <DressCode>
        <DresscodeT2 data={data.dressCode} />
      </DressCode>

      {/* No niños o información importante para los invitados */}
      <SpecialRequest>
        <SpecialRequestT2 data={data.specialRequest} />
      </SpecialRequest>

      {/* Regalo o contribución */}
      <Gift>
        <GiftT2 data={data.gift} />
      </Gift>

      <AssistanceSection>
        <Assistance
          data={data.assistance.data}
          customUI={data.assistance.customUI}
        />
      </AssistanceSection>

      <Footer>
        <FooterT2 data={data.footer} />
      </Footer>
    </>
  );
};
