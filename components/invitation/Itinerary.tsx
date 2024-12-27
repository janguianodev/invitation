import { cursiveFont, template1Font } from "@/fonts";
import { EventI } from "@/interfaces";
import { AnimatedLi, eventTypes, LinkButton, EventType } from "@/utils";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  events: EventI[];
}

export const Itinerary = ({ events }: Props) => {
  return (
    <>
      <div className="flex flex-row justify-center px-12 pt-12">
        <p
          className={`${cursiveFont.className} text-invitation-secondary text-6xl font-bold`}
        >
          Itinerario
        </p>
      </div>
      <ol className={`${template1Font.className} p-12`}>
        {events.map((item, index) => (
          <AnimatedLi
            animationkey="fadeInLeft"
            key={index}
            className="border-l-2 border-invitation-tertiary"
          >
            <div className="md:flex flex-start">
              <div className="bg-invitation-secondary w-6 h-6 p-4 flex items-center justify-center rounded-full -ml-4">
                <span className="text-white">
                  {eventTypes[item.eventType as EventType].icon}
                </span>
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-invitation-tertiary w-full ml-6 mb-10">
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-invitation-secondary text-md sm:text-xl">
                    {eventTypes[item.eventType as EventType].label}
                  </p>
                  <p className="font-medium text-invitation-secondary text-md sm:text-xl">
                    {`${(item.eventTime || new Date())
                      .toISOString()
                      .slice(11, 16)} hrs`}
                  </p>
                </div>
                <p className="text-gray-700 text-sm sm:text-md">
                  {item.eventLocation}
                </p>
                <div className="flex my-2">
                  <div>
                    <IoLocationSharp className="text-gray-700 text-sm sm:text-md" />
                  </div>
                  <p className="text-gray-700 text-xs">{item.eventAddress}</p>
                </div>
                <LinkButton
                  className="inline-block px-4 py-1.5 bg-invitation-secondary text-white font-bold text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  link={item.eventAddressLink || ""}
                  text="Abrir mapa"
                />
              </div>
            </div>
          </AnimatedLi>
        ))}
      </ol>
    </>
  );
};
