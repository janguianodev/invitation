import { template2CursiveFont, template2Font } from "@/fonts";
import { AnimatedP } from "@/utils";

interface Props {
  data: {
    bibleReference: string;
    bibleVerse: string;
    image: string;
  };
}

export const PhraseT2 = ({ data }: Props) => {
  const { bibleReference, bibleVerse, image } = data;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      {/* Overlay semitransparente para legibilidad */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
        <AnimatedP
          className={`${template2Font.className} text-white text-2xl sm:text-3xl md:text-4xl drop-shadow-lg max-w-3xl`}
          animationkey="fadeIn"
          text={`"${bibleVerse}"`}
        />
        <AnimatedP
          className={`${template2CursiveFont.className} text-white text-3xl sm:text-5xl mt-6 drop-shadow-md`}
          animationkey="fadeIn"
          text={bibleReference}
        />
      </div>
    </div>
  );
};
