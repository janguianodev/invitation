import { FaChurch, FaGlassCheers, FaScroll } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";

export const eventTypes = {
  religious_ceremony: {
    label: "Ceremonia religiosa",
    icon: <FaChurch size={20} />,
  },
  civil_ceremony: {
    label: "Ceremonia civil",
    icon: <FaScroll size={20} />,
  },
  reception: {
    label: "Recepción",
    icon: <FaGlassCheers size={20} />,
  },
  dinner: {
    label: "Cena",
    icon: <MdDinnerDining size={20} />,
  },
  party: {
    label: "Fiesta",
    icon: <GiPartyPopper size={20} />,
  },
  other: {
    label: "Otro",
    icon: <FaScroll size={20} />,
  },
};

export type EventType = keyof typeof eventTypes;
