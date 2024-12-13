import { template1Font } from "@/fonts";

interface Props {
  data: {
    confirmationCode: string;
    confirmedGuestsNames: string[];
  };
}

export const ConfirmedAssistance = ({ data }: Props) => {
  const { confirmationCode, confirmedGuestsNames } = data;

  return (
    <>
      <div
        className={`${template1Font.className} flex justify-center bg-background text-black p-12`}
      >
        <div className="flex flex-col text-center gap-3">
          <p className="text-center text-xl text-invitation-secondary">
            ¡Gracias por confirmar tu asistencia, estamos muy felices de que
            puedas acompañarnos!
          </p>
          <p className="text-center text-lg text-invitation-secondary">
            Tu código de confirmación es:
          </p>
          <p className="text-center text-4xl text-invitation-primary font-bold">
            {confirmationCode}
          </p>
          <p className="text-center text-lg text-invitation-secondary">
            Los invitados confirmados son:
          </p>
          <ul className="text-center text-lg text-invitation-secondary">
            {confirmedGuestsNames.map((guest, index) => (
              <li key={index}>{guest}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
