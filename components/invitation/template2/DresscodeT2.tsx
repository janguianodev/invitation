import { template2CursiveFont, template2Font } from "@/fonts";

interface Props {
  data: {
    dressCode: string;
  };
}

export const DresscodeT2 = ({ data }: Props) => {
  const { dressCode } = data;
  return (
    <div className="flex flex-col justify-center items-center bg-template2-secondary p-12 gap-3">
      <p
        className={`${template2Font.className} text-lg sm:text-2xl text-center text-background`}
      >
        Código de vestimenta para nuestra boda
      </p>
      <p
        className={`${template2CursiveFont.className} text-6xl text-background`}
      >
        {`${dressCode[0].toUpperCase()}${dressCode.slice(1)}`}
      </p>
    </div>
  );
};
