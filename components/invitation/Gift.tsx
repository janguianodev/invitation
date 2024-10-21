import React from "react";
import { FaGift } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoGift, IoGiftSharp, IoMail } from "react-icons/io5";
import { TbMailHeart } from "react-icons/tb";

export const Gift = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary p-12 gap-3">
      <p className="text-center text-xl sm:text-2xl">
        ¡Gracias por creer en nosotros y por acompañarnos en esta ocasión tan
        especial!
      </p>
      <div className="flex justify-center items-center gap-3">
        <IoGiftSharp size={30} />
        <IoMdMail size={30} className="mt-1" />
      </div>
    </div>
  );
};
