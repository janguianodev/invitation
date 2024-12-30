"use client";

import { template1Font } from "@/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  DenyAssistanceInputs,
  DenyAssistanceSchema,
} from "./utils/deny-assistance";
import { denyAssistance } from "@/actions";
import { usePathname } from "next/navigation";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";

interface Props {
  closeModal: () => void;
}

export const DenyAssistance = ({ closeModal }: Props) => {
  const { showAlert } = useAlert();
  const pathname = usePathname();
  const getGuestSlug = pathname.split("/").slice(-1)[0];
  const getCoupleSlug = pathname.split("/").slice(-2)[0];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      message: "",
    },
    resolver: zodResolver(DenyAssistanceSchema),
  });

  const onSubmit = async (data: DenyAssistanceInputs) => {
    const newData = {
      ...data,
      guestSlug: getGuestSlug,
      coupleSlug: getCoupleSlug,
    };
    const response = await denyAssistance(newData);

    if (!response.ok) {
      showAlert(
        AlertVariant.ERROR,
        response.error || "Ocurrió un error, intenta de nuevo"
      );
    }

    showAlert(
      AlertVariant.SUCCESS,
      response.message || "Tu respuesta ha sido enviada con éxito"
    );
    closeModal();
  };

  return (
    <div className={`${template1Font.className}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-center text-md">
              ¡Es una pena que no puedas asistir a este día tan especial!
            </p>
            <p className="text-center text-xs">
              Puedes dejarnos un mensaje si así lo deseas. (opcional)
            </p>
          </div>
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custom-secondary focus:border-transparent"
            placeholder="Escribe aquí tu mensaje"
            {...register("message")}
          />
        </div>
        <div className="flex flex-row justify-end gap-3 mt-3">
          <button className="bg-invitation-secondary text-white px-2 py-1 rounded">
            Enviar respuesta
          </button>
        </div>
      </form>
    </div>
  );
};
