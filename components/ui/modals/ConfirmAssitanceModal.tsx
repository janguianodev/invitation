"use client";

import { template1Font } from "@/fonts";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ConfirmAssistanceInputs,
  createSchema,
} from "./utils/confirm-assistance-schema";
import { confirmAssistance } from "@/actions";
import { usePathname, useRouter } from "next/navigation";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";

interface Props {
  invitedPeople: number;
  closeModal: () => void;
}

export const ConfirmAssitanceModal = ({ invitedPeople, closeModal }: Props) => {
  const { showAlert } = useAlert();
  const router = useRouter();
  const pathname = usePathname();
  const getGuestSlug = pathname.split("/").slice(-1)[0];
  const getCoupleSlug = pathname.split("/").slice(-2)[0];

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmAssistanceInputs>({
    resolver: zodResolver(createSchema(invitedPeople)),
    defaultValues: {
      guestPasses: [],
    },
  });

  const numInputs = watch("confirmedGuests") || 0; // Observa el valor actual del select

  const onSubmit = async (data: ConfirmAssistanceInputs) => {
    const newData = {
      ...data,
      guestSlug: getGuestSlug,
      coupleSlug: getCoupleSlug,
    };

    const confirm = await confirmAssistance(newData);

    console.log("confirm", confirm);

    if (!confirm.ok) {
      showAlert(
        AlertVariant.ERROR,
        confirm.error || "Ocurrió un error, intenta de nuevo"
      );
      return;
    }

    showAlert(
      AlertVariant.SUCCESS,
      confirm.message || "Gracias por confirmar tu asistencia"
    );

    closeModal();
  };

  return (
    <div className={`${template1Font.className}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-center text-black text-md">
              Tienes{" "}
              <span className="font-semibold text-custom-secondary">
                {invitedPeople}
              </span>{" "}
              pases disponibles
            </p>
            <p className="text-center text-black">
              ¿Cuántas personas asistirán?
            </p>
          </div>
          <div>
            <label htmlFor="numberOfGuests">Número de personas</label>
            <select
              {...register("confirmedGuests", { valueAsNumber: true })}
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-custom-secondary focus:outline-none"
              id="numberOfGuests"
            >
              <option value="">Selecciona</option>
              {Array.from({ length: invitedPeople }).map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            {errors.confirmedGuests && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmedGuests.message}
              </p>
            )}
          </div>
          <div>
            {Array.from({ length: numInputs }).map((_, index) => (
              <div key={index} className="mt-2">
                <label htmlFor={`guestPasses.${index}.name`}>
                  Nombre del Pase {index + 1}
                </label>
                <input
                  {...register(`guestPasses.${index}.name` as const)}
                  id={`guestPasses.${index}.name`}
                  type="text"
                  className="input-primary"
                />
                {errors.guestPasses?.[index]?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.guestPasses[index].name?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-end gap-3 mt-3">
          <button
            type="submit"
            className="bg-invitation-secondary text-white px-2 py-1 rounded"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};
