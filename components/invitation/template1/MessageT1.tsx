import { template1Font } from "@/fonts";
import { AnimatedP } from "@/utils";

interface Props {
  data: {
    welcomeMessage: string;
  };
}

export const MessageT1 = ({ data }: Props) => {
  const { welcomeMessage } = data;
  return (
    <div className="w-full bg-background p-12 text-center -mt-1">
      <AnimatedP
        animationkey="fadeInUp"
        text={welcomeMessage}
        className={`${template1Font.className} text-2xl sm:text-4xl text-invitation-secondary`}
      />
    </div>
  );
};
