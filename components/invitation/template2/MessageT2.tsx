import { template2CursiveFont } from "@/fonts";
import { AnimatedP } from "@/utils";

interface Props {
  data: {
    welcomeMessage: string;
  };
}

export const MessageT2 = ({ data }: Props) => {
  const { welcomeMessage } = data;
  return (
    <div className="w-full bg-background p-12 text-center">
      <AnimatedP
        animationkey="fadeInUp"
        text={welcomeMessage}
        className={`${template2CursiveFont.className} text-6xl sm:text-8xl text-template2-secondary drop-shadow-lg`}
      />
    </div>
  );
};
