import { cursiveFont, template1Font } from "@/fonts";
import { AnimatedP } from "@/utils";

export const SpecialPhrase = () => {
  return (
    <div className="bg-custom-secondary flex flex-col sm:flex-row justify-center items-center  w-full h-screen mx-auto text-center gap-5 shadow-lg">
      <div
        className="w-full sm:w-1/2 h-full"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1777846/pexels-photo-1777846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-12 gap-5">
        <AnimatedP
          className={`${template1Font.className} text-2xl text-white`}
          animationkey="fadeIn"
          text='"Como llama divina es el fuego ardiente del amor. Ni las muchas aguas
          pueden apagarlo, ni los ríos pueden extinguirlo. "'
        />
        <AnimatedP
          className={`${cursiveFont.className} text-4xl font-semibold text-white`}
          animationkey="fadeIn"
          text="Cantares 8:6b-7a"
        />
      </div>
    </div>
  );
};
