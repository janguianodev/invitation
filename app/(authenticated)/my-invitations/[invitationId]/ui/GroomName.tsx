import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const GroomName = ({ errors, register }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="groomName">
        Nombre del novio
      </label>
      <input
        type="text"
        id="groomName"
        className={errors.groomName ? "input-error" : "input-primary"}
        {...register("groomName", { required: true })}
      />
      {errors.groomName && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
