import { cursiveFont } from "@/fonts";
import { ConfirmedAssistance } from "./ConfirmedAssistance";
import { ConfirmAssistance } from "./ConfirmAssistance";
import { DeniedAssistance } from "./DeniedAssistance";

interface Props {
  data: {
    confirmedGuests: number | null;
    confirmedGuestsNames: string[];
    confirmationCode: string;
    invitedGuests: number;
  };
}

export const Assistance = ({ data }: Props) => {
  const {
    confirmedGuests,
    confirmedGuestsNames,
    confirmationCode,
    invitedGuests,
  } = data;

  return (
    <>
      <div className="flex flex-row justify-center px-12 pt-12">
        <p
          className={`${cursiveFont.className} text-invitation-secondary text-6xl font-bold`}
        >
          Asistencia
        </p>
      </div>

      {confirmedGuests === null && (
        <ConfirmAssistance invitedPeople={invitedGuests || 0} />
      )}

      {confirmedGuests !== null && confirmedGuests > 0 && (
        <ConfirmedAssistance
          data={{
            confirmationCode: confirmationCode || "",
            confirmedGuestsNames: confirmedGuestsNames || [],
          }}
        />
      )}

      {confirmedGuests === 0 && <DeniedAssistance />}
    </>
  );
};
