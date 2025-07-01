import { template1Font } from "@/fonts";

interface Props {
  data: {
    guestMessage: string;
  };
}

export const GuestMessageT1 = ({ data }: Props) => {
  const { guestMessage } = data;
  return (
    <div
      className={`${template1Font.className} flex flex-col items-center p-12 bg-invitation-secondary`}
    >
      <p className="text-4xl text-white text-center">¡Estás invitado!</p>
      <p className="text-xs sm:text-lg text-white text-center mt-4">
        {guestMessage}
      </p>
    </div>
  );
};
