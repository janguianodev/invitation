import { template2CursiveFont, template2Font } from "@/fonts";
import { AnimatedP } from "@/utils";

interface Props {
  data: {
    welcomeMessage: string;
  };
}

export const MessageT2 = ({ data }: Props) => {
  const { welcomeMessage } = data;
  return (
    <>
      <div className="w-full text-center text-white text-3xl bg-template2-secondary p-8">
        <AnimatedP
          animationkey="fadeIn"
          text="El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda circunstancia."
          className={`${template2CursiveFont.className} text-white antialiased text-4xl sm:text-5xl drop-shadow-lg`}
        />
      </div>
      <div className="w-full bg-background p-4 text-center">
        <AnimatedP
          animationkey="fadeInUp"
          text={welcomeMessage}
          className={`${template2Font.className} text-3xl sm:text-4xl text-template2-secondary drop-shadow-lg`}
        />
      </div>
    </>
  );
};
