import { cursiveFont } from "@/fonts";

export const DressCode = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary p-12 gap-3">
      <p className="text-lg sm:text-2xl text-center text-background">
        Código de vestimenta para nuestra boda
      </p>
      <p className={`${cursiveFont.className} text-6xl text-background`}>
        Formal
      </p>
    </div>
  );
};
