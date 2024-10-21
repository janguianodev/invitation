import { cursiveFont } from "@/fonts";
import { AnimatedP } from "../../utils/components/AnimatedP";

export const InvitationHeader = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-end"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1282&dpr=1')`,
        backgroundPosition: "top center",
      }}
    >
      <div className="flex items-center flex-col text-center bg-gradient-to-b from-transparent to-background w-full p-12 gap-4">
        <AnimatedP
          animationkey="fadeIn"
          text="3 MAYO 2025"
          className="text-4xl drop-shadow-lg"
        />
        <AnimatedP
          animationkey="fadeIn"
          text="Ana & Josué"
          className={`${cursiveFont.className} text-8xl drop-shadow-lg `}
        />
        <AnimatedP
          animationkey="fadeIn"
          text="¡Nos casamos!"
          className="text-4xl drop-shadow-lg"
        />
      </div>
    </div>
  );
};
