import { template1Font } from "@/fonts";
import { AnimatedP } from "../../utils/components/AnimatedP";

export const WelcomeMessage = () => {
  return (
    <div className="w-full bg-background p-12 text-center -mt-1">
      <AnimatedP
        animationkey="fadeInUp"
        text="Comienza el viaje más importante de nuestras vidas y queremos que seas parte de él."
        className={`${template1Font.className} text-2xl sm:text-4xl text-custom-secondary`}
      />
    </div>
  );
};
