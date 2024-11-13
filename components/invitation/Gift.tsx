import { template1Font } from "@/fonts";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoGiftSharp } from "react-icons/io5";

export const Gift = () => {
  return (
    <div
      className={`${template1Font.className} flex flex-col justify-center items-center bg-custom-secondary p-12 gap-3`}
    >
      <p className="text-center text-white text-xl sm:text-2xl">
        ¡Gracias por creer en nosotros y por acompañarnos en esta ocasión tan
        especial!
      </p>
      <div className="flex justify-center items-center gap-3 text-white">
        <IoGiftSharp size={30} />
        <IoMdMail size={30} className="mt-1" />
      </div>
    </div>
  );
};
