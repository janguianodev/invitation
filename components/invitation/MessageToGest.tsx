import { template1Font } from "@/fonts";

export const MessageToGest = () => {
  return (
    <div
      className={`${template1Font.className} flex flex-col items-center p-12 bg-invitation-secondary`}
    >
      <p className="text-4xl text-white text-center">¡Estás invitado!</p>
      <p className="text-xs sm:text-lg text-white text-center mt-4">
        A nuestra boda y nos encantaría que seas parte de este día tan especial
        para nosotros.
      </p>
    </div>
  );
};
