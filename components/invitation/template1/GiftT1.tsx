import { template1Font } from "@/fonts";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoGiftSharp } from "react-icons/io5";

interface Props {
  data: {
    giftRegistryType: string;
    giftRegistryLink: string;
    giftRegistryMsg: string;
  };
}

export const GiftT1 = ({ data }: Props) => {
  const { giftRegistryType, giftRegistryMsg } = data;

  return (
    <div
      className={`${template1Font.className} flex flex-col justify-center items-center bg-invitation-secondary p-12 gap-3`}
    >
      <p className="text-center text-white text-xl sm:text-2xl">
        {giftRegistryMsg}
      </p>
      <div className="flex justify-center items-center gap-3 text-white">
        {giftRegistryType === "sobre" && (
          <IoMdMail size={30} className="mt-1" />
        )}
        <IoGiftSharp size={30} />
      </div>
    </div>
  );
};
