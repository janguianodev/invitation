import Image from "next/image";
import { template2Font } from "@/fonts";
import { AnimatedDiv, AnimatedP } from "@/utils";

interface Props {
  data: {
    specialRequest: string;
    image: string;
  };
}

export const SpecialRequestT2 = ({ data }: Props) => {
  const { specialRequest, image } = data;

  return (
    <section className="bg-white px-6 sm:px-12 md:px-24 py-20 text-center flex flex-col items-center gap-8 h-full justify-center">
      {/* Imagen redonda decorativa */}
      <AnimatedDiv
        animationkey="fadeIn"
        className="relative w-96 h-96 rounded-full overflow-hidden border-[1px] border-gray-300 shadow-md"
      >
        <Image
          src={image}
          alt="Decoración especial"
          fill
          className="object-cover"
        />
      </AnimatedDiv>

      {/* Línea decorativa superior */}
      <div className="w-16 h-[1px] bg-gray-400" />

      {/* Texto elegante */}
      <AnimatedP
        className={`${template2Font.className} text-2xl sm:text-3xl text-template2-secondary max-w-2xl`}
        animationkey="fadeIn"
        text={specialRequest}
      />

      {/* Línea decorativa inferior */}
      <div className="w-8 h-[1px] bg-gray-400" />
    </section>
  );
};
