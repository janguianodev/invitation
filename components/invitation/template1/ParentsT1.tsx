import Image from "next/image";
import { cursiveFont, template1Font } from "@/fonts";
import { AnimatedP } from "@/utils";

interface Props {
  data: {
    brideParents: string;
    groomParents: string;
  };
}

export const ParentsT1 = ({ data }: Props) => {
  const { brideParents, groomParents } = data;

  const renderParentNames = (parents: string) => {
    return parents.split(",").map((parent, index) => {
      return (
        <AnimatedP
          key={index}
          text={parent}
          className={`${template1Font.className} text-xl sm:text-2xl text-center`}
          animationkey="fadeIn"
        />
      );
    });
  };

  return (
    <div className="flex flex-col justify-center p-12 text-invitation-secondary bg-white">
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
            {brideParents && renderParentNames(brideParents)}
          </div>
        </div>
        <div>
          <span className={`${cursiveFont.className} text-2xl`}>&amp;</span>
        </div>
        <div>
          <div className="mt-3">
            {groomParents && renderParentNames(groomParents)}
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
