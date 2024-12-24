import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const GuestMessage = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="guestMessage">
        Mensaje al invitado
      </label>
      <textarea
        id="guestMessage"
        className={errors.guestMessage ? "input-error" : "input-primary"}
        {...register("guestMessage", { required: true })}
      />
      {errors.guestMessage && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
