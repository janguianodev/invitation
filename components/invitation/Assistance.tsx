import { ConfirmAssistance } from "./ConfirmAssistance";
import { ConfirmedAssistance } from "./ConfirmedAssistance";
import { DeniedAssistance } from "./DeniedAssistance";

interface Props {
  data: {
    confirmedGuests: number | null;
    confirmedGuestsNames: string[];
    confirmationCode: string;
    invitedGuests: number;
  };
  customUI: {
    template: string;
    fontClass: string;
    cursiveFontClass: string;
  };
}

export const Assistance = ({ data, customUI }: Props) => {
  const {
    confirmedGuests,
    confirmedGuestsNames,
    confirmationCode,
    invitedGuests,
  } = data;

  const { template, fontClass, cursiveFontClass } = customUI;

  return (
    <>
      <div className="flex flex-row justify-center px-12 pt-12">
        <p
          className={`${cursiveFontClass} text-${template}-secondary text-6xl font-bold`}
        >
          Asistencia
        </p>
      </div>

      {confirmedGuests === null && (
        <ConfirmAssistance
          invitedPeople={invitedGuests || 0}
          customUI={{
            template,
            fontClass,
            cursiveFontClass,
          }}
        />
      )}

      {confirmedGuests !== null && confirmedGuests > 0 && (
        <ConfirmedAssistance
          data={{
            confirmationCode: confirmationCode || "",
            confirmedGuestsNames: confirmedGuestsNames || [],
          }}
          customUI={{
            template,
            fontClass,
          }}
        />
      )}

      {confirmedGuests === 0 && (
        <DeniedAssistance customUI={{ template, fontClass }} />
      )}
    </>
  );
};
