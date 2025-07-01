import { template2Font } from "@/fonts";

interface Props {
  data: {
    guestMessage: string;
  };
}

export const GuestMessageT2 = ({ data }: Props) => {
  const { guestMessage } = data;

  return (
    <div className="relative bg-template2-secondary text-white py-24 px-6 sm:px-12 flex flex-col items-center text-center overflow-hidden">
      {/* Texto principal */}
      <p
        className={`${template2Font.className} text-3xl sm:text-4xl mb-4 drop-shadow`}
      >
        {guestMessage}
      </p>

      <p
        className={`${template2Font.className} text-lg sm:text-2xl max-w-xl drop-shadow-sm`}
      >
        Su presencia será un regalo invaluable que atesoraremos por siempre.
      </p>

      {/* Diagonal inferior usando SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none index-1000">
        <svg
          className="relative block w-[100%] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            fill="currentColor"
            points="0,0 0,100 100,100"
            className="text-transparent"
          />
        </svg>
      </div>
    </div>
  );
};
