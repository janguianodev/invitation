import { template1Font } from "@/fonts";

interface Props {
  data: {
    partner1Name: string;
    partner2Name: string;
  };
}

export const FooterT1 = ({ data }: Props) => {
  const { partner1Name, partner2Name } = data;

  return (
    <div
      className={`${template1Font.className} flex w-full justify-center text-xs bg-invitation-tertiary p-12`}
    >
      <span className={`text-invitation-secondary antialiased font-bold `}>
        {partner1Name.split(" ")[0]} & {partner2Name.split(" ")[0]}
      </span>
      <span className="text-invitation-secondary">
        &copy; {new Date().getFullYear()}
      </span>
    </div>
  );
};
