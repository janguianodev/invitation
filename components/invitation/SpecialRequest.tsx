import { template1Font } from "@/fonts";
import { AnimatedP } from "@/utils";

export const SpecialRequest = () => {
  return (
    <div className="bg-background flex flex-col sm:flex-row justify-center items-center  w-full h-screen mx-auto text-center gap-5 shadow-lg">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-12 gap-5">
        <AnimatedP
          className={`${template1Font.className} text-custom-secondary text-center text-md sm:text-2xl w-full drop-shadow-lg`}
          animationkey="fadeIn"
          text="Con el fin de mantener un ambiente relajado y sin distracciones durante
        nuestra boda, hemos decidido que la celebración sea solo para adultos y
        jóvenes. Agradecemos tu comprensión."
        />
      </div>
      <div
        className="w-full sm:w-1/2 h-full"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1777846/pexels-photo-1777846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};
