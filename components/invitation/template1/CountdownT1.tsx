import { cursiveFont, template1Font } from "@/fonts";
import { AnimatedP, getDaysToEvent } from "@/utils";

interface Props {
  data: {
    eventDate: Date;
    image: string;
  };
}

export const CountdownT1 = ({ data }: Props) => {
  const { eventDate, image } = data;

  const daysToEvent = getDaysToEvent(eventDate);

  const getMessage = (daysToEvent: string) => {
    if (daysToEvent === "Hoy") {
      return "es nuestro gran día";
    }

    if (daysToEvent === "Gracias") {
      return "por acompañarnos";
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

      <div className="relative z-10 text-center p-8">
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
