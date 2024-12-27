import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const EventDate = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="">
        Fecha del evento
      </label>
      <input
        type="date"
        id="eventDate"
        className={errors.eventDate ? "input-error" : "input-primary"}
        {...register("eventDate", { required: true })}
      />
      {errors.eventDate && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
