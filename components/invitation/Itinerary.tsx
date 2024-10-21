import { cursiveFont } from "@/fonts";
import { AnimatedLi, LinkButton } from "@/utils";
import React from "react";
import { FaChurch, FaGlassCheers, FaScroll } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export const Itinerary = () => {
  const itineraryData = [
    {
      icon: <FaChurch size={20} />,
      title: "Ceremonia Religiosa",
      time: "4:00 PM",
      location: "San Juan Nepomuceno",
      address: "C. Hidalgo Sur 512, Zona Centro, 25000 Saltillo, Coah.",
      mapsLink: "https://maps.app.goo.gl/cnxCDAwefPdRSHcy5",
    },
    {
      icon: <FaScroll size={20} />,
      title: "Ceremonia Civil",
      time: "6:00 PM",
      location: "Casa Vieja",
      address:
        "Gral. Victoriano Cepeda sur 765, Zona Centro, 25000 Saltillo, Coah.",
      mapsLink: "https://maps.app.goo.gl/BN6XpJ1ionXpGXrk8",
    },
    {
      icon: <FaGlassCheers size={20} />,
      title: "Recepción",
      time: "8:00 PM",
      location: "Casa Vieja",
      address:
        "Gral. Victoriano Cepeda sur 765, Zona Centro, 25000 Saltillo, Coah.",
      mapsLink: "https://maps.app.goo.gl/BN6XpJ1ionXpGXrk8",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-center px-12 pt-12">
        <p
          className={`${cursiveFont.className} text-secondary text-6xl font-bold`}
        >
          Itinerario
        </p>
      </div>
      <ol className="p-12">
        {itineraryData.map((item, index) => (
          <AnimatedLi
            animationkey="fadeInLeft"
            key={index}
            className="border-l-2 border-tertiary"
          >
            <div className="md:flex flex-start">
              <div className="bg-secondary w-6 h-6 p-4 flex items-center justify-center rounded-full -ml-4">
                <span className="text-white">{item.icon}</span>
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-tertiary w-full ml-6 mb-10">
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-secondary text-md sm:text-xl">
                    {item.title}
                  </p>
                  <p className="font-medium text-secondary text-md sm:text-xl">
                    {item.time}
                  </p>
                </div>
                <p className="text-gray-700 text-sm sm:text-md">
                  {item.location}
                </p>
                <div className="flex my-2">
                  <div>
                    <IoLocationSharp className="text-gray-700 text-sm sm:text-md" />
                  </div>
                  <p className="text-gray-700 text-xs">{item.address}</p>
                </div>
                <LinkButton
                  className="inline-block px-4 py-1.5 bg-secondary text-white font-bold text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  link={item.mapsLink}
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
