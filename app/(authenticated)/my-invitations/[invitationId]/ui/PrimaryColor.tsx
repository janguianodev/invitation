import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const PrimaryColor = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="primaryColor">
        Color 1 de la invitación
      </label>
      <input
        type="color"
        id="primaryColor"
        className={errors.primaryColor ? "input-error" : "input-primary"}
        {...register("primaryColor", { required: true })}
      />
      {errors.primaryColor && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
