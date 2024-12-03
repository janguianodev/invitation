import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const BrideName = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="brideName">
        Nombre de la novia
      </label>
      <input
        type="text"
        id="brideName"
        className={errors.brideName ? "input-error" : "input-primary"}
        {...register("brideName", { required: true })}
      />
      {errors.brideName && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
