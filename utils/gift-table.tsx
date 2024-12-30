import { FaAmazon } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoGiftSharp } from "react-icons/io5";
import { SiMercadopago } from "react-icons/si";

export const giftTableData = {
  regalo: {
    text: "Regalo",
    icon: <IoGiftSharp size={30} />,
  },
  sobre: {
    text: "Sobre",
    icon: <IoMdMail size={30} className="mt-1" />,
  },
  liverpool: {
    text: "Liverpool",
    icon: <FaBagShopping size={30} />,
  },
  amazon: {
    text: "Amazon",
    icon: <FaAmazon size={30} />,
  },
  mercadolibre: {
    text: "Mercado Libre",
    icon: <SiMercadopago size={30} />,
  },
  otro: {
    text: "Otro",
    icon: <IoGiftSharp size={30} />,
  },
};
