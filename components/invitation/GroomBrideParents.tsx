import Image from "next/image";
import { AnimatedP } from "../../utils/components/AnimatedP";
import { cursiveFont } from "@/fonts";

export const GroomBrideParents = () => {
  return (
    <div className="flex flex-col justify-center p-12 text-secondary bg-white">
      <div className="flex flex-row justify-center rotate-[130deg]">
        <Image
          src={"/images/green-leaf.svg"}
          width={150}
          height={150}
          alt="green-leaf"
        />
      </div>
      <p className={`${cursiveFont.className} text-center text-4xl`}>
        Con la bendición de Dios y de nuestros padres...
      </p>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-10 mt-8">
        <div>
          <div className="mt-3">
            <AnimatedP
              text="Maria Esther García Raya"
              className="text-xl sm:text-2xl text-center"
              animationkey="fadeIn"
            />
            <AnimatedP
              text="Juan Balderas Rodriguez"
              className="text-xl sm:text-2xl text-center"
              animationkey="fadeIn"
            />
          </div>
        </div>
        <div>
          <span className={`${cursiveFont.className} text-2xl`}>&amp;</span>
        </div>
        <div>
          <div className="mt-3">
            <AnimatedP
              text="Sanjuana González Niño"
              className="text-xl sm:text-2xl text-center"
              animationkey="fadeIn"
            />
            <AnimatedP
              text="Isabel Anguiano Urbano"
              className="text-xl sm:text-2xl text-center"
              animationkey="fadeIn"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center rotate-[310deg]">
        <Image
          src={"/images/green-leaf.svg"}
          width={150}
          height={150}
          alt="green-leaf"
        />
      </div>
    </div>
  );
};
