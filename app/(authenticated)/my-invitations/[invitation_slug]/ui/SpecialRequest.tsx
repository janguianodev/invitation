import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const SpecialRequest = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="specialRequest">
        Mensaje &quot;no niños&quot; ó petición especial{" "}
      </label>
      <textarea
        id="specialRequest"
        className={errors.specialRequest ? "input-error" : "input-primary"}
        {...register("specialRequest", { required: true })}
      />
      {errors.specialRequest && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
