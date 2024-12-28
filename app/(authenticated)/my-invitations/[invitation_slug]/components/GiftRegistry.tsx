"use client";

import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { GiftTableType } from "../constants/gift-table";
import { InvitationSetupFormI } from "@/interfaces";
import { InvitationImages } from "@/interfaces/invitation-setup-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI & InvitationImages>;
  errors: FieldErrors<InvitationSetupFormI & InvitationImages>;
  watch: UseFormWatch<InvitationSetupFormI & InvitationImages>;
}

export const GiftRegistry = ({ errors, register, watch }: Props) => {
  const selectedGiftType = watch("giftRegistryType");

  return (
    <div className="flex flex-col gap-1 md:col-span-2">
      <p className="text-gray-600 font-semibold">Mesa de regalos</p>

      <div className="flex flex-col gap-1 mt-2">
        <label className="text-gray-600" htmlFor="giftRegistryMsg">
          Mensaje de la mesa de regalos
        </label>
        <input
          type="text"
          id="giftRegistryMsg"
          className={
            errors.giftRegistryMsg?.message ? "input-error" : "input-primary"
          }
          {...register("giftRegistryMsg", {
            required: "Este campo es requerido",
          })}
        />
        {errors.giftRegistryMsg?.message && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
      </div>

      {errors?.giftRegistryMsg?.type && (
        <span className="text-red-500">Debes seleccionar una opción</span>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        {Object.values(GiftTableType).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <input
              type="radio"
              id={type}
              value={type}
              {...register("giftRegistryType", {
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
              id="giftRegistryLink"
              className={
                errors.giftRegistryLink ? "input-error" : "input-primary"
              }
              {...register("giftRegistryLink", {
                required: "Este campo es requerido",
              })}
            />
            {errors.giftRegistryLink && (
              <span className="text-red-500">
                {errors.giftRegistryLink.message}
              </span>
            )}
          </div>
        )}
    </div>
  );
};
