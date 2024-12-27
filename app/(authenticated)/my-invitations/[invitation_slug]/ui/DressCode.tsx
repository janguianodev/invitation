import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const DressCode = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="dressCode">
        Código de vestimenta
      </label>
      <input
        type="text"
        id="dressCode"
        {...register("dressCode", { required: true })}
        className={errors.dressCode ? "input-error" : "input-primary"}
      />
      {errors.dressCode && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
