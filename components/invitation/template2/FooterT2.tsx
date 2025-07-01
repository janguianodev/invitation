import { template2Font } from "@/fonts";

interface Props {
  data: {
    partner1Name: string;
    partner2Name: string;
  };
}

export const FooterT2 = ({ data }: Props) => {
  const { partner1Name, partner2Name } = data;

  return (
    <div
      className={`${template2Font.className} flex w-full justify-center text-sm bg-template2-secondary p-12`}
    >
      <span className={`text-white antialiased font-bold `}>
        {partner1Name.split(" ")[0]} & {partner2Name.split(" ")[0]}
      </span>
      <span className="text-white">&copy; {new Date().getFullYear()}</span>
    </div>
  );
};
