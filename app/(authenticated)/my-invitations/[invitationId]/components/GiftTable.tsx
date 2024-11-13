"use client";

import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { GiftTableType } from "../constants/gift-table";
import { InvitationSetupFormI } from "@/interfaces";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
  watch: UseFormWatch<InvitationSetupFormI>;
}

export const GiftTable = ({ errors, register, watch }: Props) => {
  const selectedGiftType = watch("giftTable.type");

  return (
    <div className="flex flex-col gap-1 md:col-span-2">
      <p className="text-gray-600 font-semibold">Mesa de regalos</p>

      <div className="flex flex-col gap-1 mt-2">
        <label className="text-gray-600" htmlFor="giftTable.message">
          Mensaje de la mesa de regalos
        </label>
        <input
          type="text"
          id="giftTable.message"
          className={
            errors.giftTable?.message ? "input-error" : "input-primary"
          }
          {...register("giftTable.message", {
            required: "Este campo es requerido",
          })}
        />
        {errors.giftTable?.message && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>

      {errors?.giftTable?.type && (
        <span className="text-red-500">Debes seleccionar una opción</span>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        {Object.values(GiftTableType).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <input
              type="radio"
              id={type}
              value={type}
              {...register("giftTable.type", {
                required: "Este campo es requerido",
              })}
            />
            <label className="text-gray-600" htmlFor={type}>
              {type}
            </label>
          </div>
        ))}
      </div>

      {/* Mostrar el campo de link solo si el tipo seleccionado no es "regalos" o "sobre" */}
      {selectedGiftType &&
        selectedGiftType !== GiftTableType.Regalo &&
        selectedGiftType !== GiftTableType.Sobre && (
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-gray-600" htmlFor="giftTable.link">
              Link del regalo
            </label>
            <input
              type="text"
              id="giftTable.link"
              className={
                errors.giftTable?.link ? "input-error" : "input-primary"
              }
              {...register("giftTable.link", {
                required: "Este campo es requerido",
              })}
            />
            {errors.giftTable?.link && (
              <span className="text-red-500">
                {errors.giftTable.link.message}
              </span>
            )}
          </div>
        )}
    </div>
  );
};
