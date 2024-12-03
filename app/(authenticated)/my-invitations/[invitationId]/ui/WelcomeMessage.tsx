import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const WelcomeMessage = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="welcomeMessage">
        Mensaje de bienvenida
      </label>
      <textarea
        id="welcomeMessage"
        className={errors.welcomeMessage ? "input-error" : "input-primary"}
        {...register("welcomeMessage", { required: true })}
      />
      {errors.welcomeMessage && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
