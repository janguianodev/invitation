import Image from "next/image";
import { template2CursiveFont, template2Font } from "@/fonts";
import { AnimatedP } from "@/utils";

interface Props {
  data: {
    brideParents: string;
    groomParents: string;
  };
}

export const ParentsT2 = ({ data }: Props) => {
  const { brideParents, groomParents } = data;

  const renderParentNames = (parents: string) =>
    parents.split(",").map((parent, i) => {
      const trimmed = parent.trim();
      const isDeceased = trimmed.endsWith("x");
      const displayName = isDeceased ? trimmed.slice(0, -1).trim() : trimmed;

      return (
        <div key={i} className="flex items-center justify-center gap-2">
          <AnimatedP
            text={displayName}
            className={`${template2Font.className} text-center text-template2-secondary text-2xl sm:text-3xl`}
            animationkey="fadeIn"
          />
          {isDeceased && (
            <Image
              src="/images/cross.svg"
              alt="moño luctuoso"
              width={20}
              height={20}
            />
          )}
        </div>
      );
    });

  return (
    <div className="relative bg-template2-tertiary py-20 px-6 sm:px-12 md:px-24 text-center overflow-hidden">
      {/* Top SVG Decor */}
      <Image
        src="/images/blue-leaf.png"
        alt="decorativo superior"
        width={200}
        height={200}
        className="mx-auto mb-6"
      />

      {/* Frase principal */}
      <p
        className={`${template2CursiveFont.className} text-4xl sm:text-5xl text-template2-secondary mb-10`}
      >
        Acompañados por el amor de nuestros padres...
      </p>

      {/* Vertical Stack */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-2">
          {renderParentNames(brideParents)}
        </div>

        <span className={`${template2Font.className} text-3xl text-gray-600`}>
          &amp;
        </span>

        <div className="flex flex-col gap-2">
          {renderParentNames(groomParents)}
        </div>
      </div>
    </div>
  );
};
