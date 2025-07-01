import { template2CursiveFont } from "@/fonts";
import { EventI } from "@/interfaces";
import { eventTypes, EventType, AnimatedLi } from "@/utils";
import Link from "next/link";

interface Props {
  data: {
    events: EventI[];
  };
}

export const ItineraryT2 = ({ data }: Props) => {
  const { events } = data;

  return (
    <div className="bg-template2-tertiary px-4 sm:px-8 md:px-16 lg:px-32 py-16">
      {/* Título principal */}
      <h2
        className={`${template2CursiveFont.className} text-center text-4xl sm:text-6xl font-medium text-template2-secondary mb-16`}
      >
        Nuestro Itinerario
      </h2>

      {/* Línea vertical guía */}
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 h-full border-l-[1.5px] border-gray-300" />

        {/* Lista de eventos */}
        <ul className="flex flex-col gap-12 relative z-10">
          {events.map((event, index) => {
            const eventType = event.eventType as EventType;
            const Icon = eventTypes[eventType]?.icon;
            const label = eventTypes[eventType]?.label || "";
            const time = event.eventTime
              ? new Date(event.eventTime).toLocaleTimeString("es-MX", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--";

            return (
              <AnimatedLi
                animationkey="fadeInRight"
                key={index}
                className="flex items-start gap-4 sm:gap-6 relative"
              >
                {/* Ícono */}
                <div className="w-8 h-8 flex-shrink-0 text-xl text-template2-secondary mt-1 sm:ml-[calc(50%-28px)] -ml-2">
                  {Icon}
                </div>

                {/* Texto del evento */}
                <div className="text-left max-w-md ml-2 sm:ml-0">
                  <p className="text-sm sm:text-base font-semibold text-template2-secondary">
                    {time} hrs
                  </p>
                  {label && (
                    <p className="text-sm sm:text-base text-gray-600">
                      {label}
                    </p>
                  )}
                  {event.eventLocation && (
                    <p className="text-xs text-gray-500 mt-1">
                      {event.eventLocation}
                    </p>
                  )}
                  {event.eventAddress && (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      {event.eventAddress}
                    </p>
                  )}
                  {event.eventAddressLink && (
                    <Link
                      href={event.eventAddressLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-template2-secondary font-medium underline mt-2 inline-block"
                    >
                      Abrir mapa
                    </Link>
                  )}
                </div>
              </AnimatedLi>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
