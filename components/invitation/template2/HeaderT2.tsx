import { template2Font } from "@/fonts";
import { AnimatedP } from "@/utils";

interface props {
  data: {
    eventDate: Date;
    partner1Name: string;
    partner2Name: string;
    image: string;
  };
}

export const HeaderT2 = ({ data }: props) => {
  const { partner1Name, partner2Name, image } = data;

  const coupleNames = () => {
    if (!partner1Name || !partner2Name) return "";

    return (
      partner1Name.split(" ")[0][0] + " | " + partner2Name.split(" ")[0][0]
    );
  };
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center flex-col text-center w-full sm:w-1/2 p-12 gap-4">
        <AnimatedP
          animationkey="fadeIn"
          text={coupleNames()}
          className={`${template2Font.className} text-white text-8xl drop-shadow-lg`}
        />
      </div>
    </div>
  );
};
