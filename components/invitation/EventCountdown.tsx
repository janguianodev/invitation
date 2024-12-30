import { cursiveFont, template1Font } from "@/fonts";
import { AnimatedP } from "../../utils/components/AnimatedP";
import { getDaysToEvent } from "@/utils";

interface Props {
  eventDate: Date;
  image: string;
}

export const EventCountdown = ({ eventDate, image }: Props) => {
  const daysToEvent = getDaysToEvent(eventDate);

  const getMessage = (daysToEvent: string) => {
    if (daysToEvent === "Hoy") {
      return "es nuestro gran día";
    }

    if (daysToEvent === "Gracias por acompañarnos") {
      return "en nuestro gran día";
    }

    return "para nuestro gran día";
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative z-10 text-center">
        <AnimatedP
          className={`${cursiveFont.className} text-9xl text-invitation-primary drop-shadow-md font-bold`}
          text={daysToEvent}
          animationkey="pulseOpacity"
        />
        <p
          className={`${template1Font.className} text-2xl text-white drop-shadow-md`}
        >
          {getMessage(daysToEvent)}
        </p>
      </div>
    </div>
  );
};
