import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const GroomParents = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="groomParents">
        Papás del novio{" "}
        <span className="text-xs text-gray-500">(separados por coma)</span>
      </label>
      <input
        type="text"
        id="groomParents"
        placeholder="Juan Perez, María González"
        className={errors.groomParents ? "input-error" : "input-primary"}
        {...register("groomParents", { required: true })}
      />
      {errors.groomParents && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
