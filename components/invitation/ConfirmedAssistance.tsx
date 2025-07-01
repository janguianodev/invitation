interface Props {
  data: {
    confirmationCode: string;
    confirmedGuestsNames: string[];
  };
  customUI: {
    template: string;
    fontClass: string;
  };
}

export const ConfirmedAssistance = ({ data, customUI }: Props) => {
  const { template, fontClass } = customUI;
  const { confirmationCode, confirmedGuestsNames } = data;

  return (
    <>
      <div
        className={`${fontClass} flex justify-center bg-background text-black p-12`}
      >
        <div className="flex flex-col text-center gap-3">
          <p className={`text-center text-xl text-${template}-secondary`}>
            ¡Gracias por confirmar tu asistencia, estamos muy felices de que
            puedas acompañarnos!
          </p>
          <p className={`text-center text-lg text-${template}-secondary`}>
            Tu código de confirmación es:
          </p>
          <p
            className={`text-center text-4xl text-${template}-secondary font-bold`}
          >
            {confirmationCode}
          </p>
          <p className={`text-center text-lg text-${template}-secondary`}>
            Los invitados confirmados son:
          </p>
          <ul className={`text-center text-lg text-${template}-secondary`}>
            {confirmedGuestsNames.map((guest, index) => (
              <li key={index}>{guest}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
