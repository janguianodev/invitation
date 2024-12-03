import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const BrideParents = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="brideParents">
        Papás de la novia{" "}
        <span className="text-xs text-gray-500">(separados por coma)</span>
      </label>
      <input
        type="text"
        id=""
        placeholder="Juan Perez, María González"
        className={errors.brideParents ? "input-error" : "input-primary"}
        {...register("brideParents", { required: true })}
      />
      {errors.brideParents && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
