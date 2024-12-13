import { template1Font } from "@/fonts";

export const DeniedAssistance = () => {
  return (
    <div
      className={`${template1Font.className} flex justify-center bg-background text-black p-12`}
    >
      <div className="flex flex-col text-center gap-3">
        <p className="text-center text-xl text-invitation-secondary">
          Gracias por informarnos
        </p>
        <p className="text-center text-xl text-invitation-secondary">
          Es una pena que no puedas acompañarnos en este día tan especial
        </p>
      </div>
    </div>
  );
};
