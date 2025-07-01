interface Props {
  customUI: {
    template: string;
    fontClass: string;
  };
}

export const DeniedAssistance = ({ customUI }: Props) => {
  const { template, fontClass } = customUI;

  return (
    <div
      className={`${fontClass} flex justify-center bg-background text-black p-12`}
    >
      <div className="flex flex-col text-center gap-3">
        <p className={`text-center text-xl text-${template}-secondary`}>
          Gracias por informarnos
        </p>
        <p className={`text-center text-xl text-${template}-secondary`}>
          Es una pena que no puedas acompañarnos en este día
        </p>
      </div>
    </div>
  );
};
