import { cursiveFont, template1Font } from "@/fonts";
import { AnimatedP } from "../../utils/components/AnimatedP";
import { formatDate } from "@/utils";

interface props {
  data: {
    eventDate: Date;
    partner1Name: string;
    partner2Name: string;
  };
}

export const InvitationHeader = ({ data }: props) => {
  const { eventDate, partner1Name, partner2Name } = data;

  const coupleNames = () => {
    if (!partner1Name || !partner2Name) return "";

    return partner1Name.split(" ")[0] + " & " + partner2Name.split(" ")[0];
  };
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
          text={formatDate(eventDate)}
          className={`${template1Font.className} text-white antialiased text-4xl drop-shadow-lg`}
        />
        <AnimatedP
          animationkey="fadeIn"
          text={coupleNames()}
          className={`${cursiveFont.className} text-white text-8xl drop-shadow-lg `}
        />
        <AnimatedP
          animationkey="fadeIn"
          text="¡Nos casamos!"
          className={`${template1Font.className} text-white antialiased text-4xl drop-shadow-lg`}
        />
      </div>
    </div>
  );
};
