"use client";

import { template2Font } from "@/fonts";
import { AnimatedDiv, getTimeToEventInMonthsAndDays } from "@/utils";

interface Props {
  data: {
    eventDate: Date;
  };
}

export const CountDownT2 = ({ data }: Props) => {
  const { eventDate } = data;

  const time = getTimeToEventInMonthsAndDays(eventDate);
  const { months, days } = time;

  return (
    <div className="bg-white py-16 px-6 sm:px-12 text-center text-black">
      <div className="w-12 h-[2px] bg-black mx-auto mb-6" />

      <h2
        className={`${template2Font.className} text-3xl sm:text-4xl tracking-widest mb-10 text-template2-secondary`}
      >
        CONTEO REGRESIVO PARA EL GRAN DÍA
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <CountdownBox value={months} label="MESES" />
        <CountdownBox value={days} label="DÍAS" />
      </div>
    </div>
  );
};

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  // <div className="border border-template2-secondary rounded-md px-6 py-4 w-48 sm:w-60 flex flex-col items-center text-template2-secondary bg-template2-tertiary">
  <AnimatedDiv
    animationkey="fadeIn"
    className="border border-template2-secondary rounded-md px-6 py-4 w-48 sm:w-60 flex flex-col items-center text-template2-secondary bg-template2-tertiary"
  >
    <span className="text-4xl font-bold">{value}</span>
    <div className="w-8 h-[2px] bg-template2-secondary my-2" />
    <span className="text-xs tracking-widest">{label}</span>
  </AnimatedDiv>
  // </div>
);
