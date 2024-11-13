import { cursiveFont, template1Font } from "@/fonts";
import { AnimatedP } from "../../utils/components/AnimatedP";

export const EventCountdown = () => {
  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative z-10 text-center">
        <AnimatedP
          className={`${cursiveFont.className} text-9xl text-custom-primary drop-shadow-md font-bold`}
          text="8 días"
          animationkey="pulseOpacity"
        />
        <p
          className={`${template1Font.className} text-2xl text-white drop-shadow-md`}
        >
          para nuestro gran día
        </p>
      </div>
    </div>
  );
};
