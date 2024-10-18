import {
  ConfirmAssistance,
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

export const Template1 = () => {
  return (
    <>
      {/* Header */}
      <InvitationHeader />

      {/* Mensaje de bienvenida */}
      <WelcomeMessage />

      {/* Frase de los novios */}
      <SpecialPhrase />

      {/* Padres de los novios */}
      <GroomBrideParents />

      {/* Mensaje al invitado */}
      <MessageToGest />

      {/* Countdown para la boda */}
      <EventCountdown />

      {/* itinerario */}
      <Itinerary />

      {/* código de vestimenta */}
      <DressCode />

      {/* No niños o información importante para los invitados */}
      <SpecialRequest />

      {/* Regalo o contribución */}
      <Gift />

      {/* Confirmación. 
      Agregar un checkbox para confirmar asistencia. si no va a asistir, 
      agregar un input para que pueda escribir un mensaje */}
      <ConfirmAssistance />

      <Footer />
    </>
  );
};
