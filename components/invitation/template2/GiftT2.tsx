import { template2CursiveFont, template2Font } from "@/fonts";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { AnimatedDiv, AnimatedP } from "@/utils";

interface Props {
  data: {
    giftRegistryType: string;
    giftRegistryLink: string;
    giftRegistryMsg: string;
  };
}

export const GiftT2 = ({ data }: Props) => {
  const { giftRegistryMsg, giftRegistryType, giftRegistryLink } = data;

  const isSobre = giftRegistryType === "sobre";

  return (
    <section className="bg-template2-tertiary py-20 px-6 sm:px-12 md:px-24 flex flex-col items-center text-center gap-8">
      {/* Encabezado decorativo */}
      <h3
        className={`${template2CursiveFont.className} text-4xl sm:text-5xl text-template2-secondary`}
      >
        Detalle especial
      </h3>

      {/* Mensaje */}
      <AnimatedP
        animationkey="fadeIn"
        text={giftRegistryMsg}
        className={`${template2Font.className} text-gray-700 max-w-xl text-2xl sm:text-2xl leading-relaxed`}
      />

      {/* Ícono si aplica */}
      {isSobre && (
        <AnimatedDiv
          animationkey="fadeIn"
          className="w-14 h-14 flex items-center justify-center rounded-full border border-template2-secondary text-template2-secondary"
        >
          <IoMdMail size={28} />
        </AnimatedDiv>
      )}

      {/* Botón si hay link */}
      {giftRegistryLink && (
        <Link
          href={giftRegistryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base px-6 py-2 border border-template2-secondary text-template2-secondary rounded-full hover:bg-template2-secondary hover:text-white transition-all duration-300"
        >
          Ver mesa de regalos
        </Link>
      )}
    </section>
  );
};
