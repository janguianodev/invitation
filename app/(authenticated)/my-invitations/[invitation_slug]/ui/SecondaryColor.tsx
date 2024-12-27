import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const SecondaryColor = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="secondaryColor">
        Color 2 de la invitación
      </label>
      <input
        type="color"
        id="secondaryColor"
        className={errors.secondaryColor ? "input-error" : "input-primary"}
        {...register("secondaryColor", { required: true })}
      />
      {errors.secondaryColor && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
