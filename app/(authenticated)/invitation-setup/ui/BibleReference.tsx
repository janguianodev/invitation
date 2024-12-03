import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const BibleReference = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="bibleReference">
        Referencia de la biblia
      </label>

      <input
        type="text"
        id="bibleReference"
        placeholder="Juan 3:16"
        className={errors.bibleReference ? "input-error" : "input-primary"}
        {...register("bibleReference", { required: true })}
      />
      {errors.bibleReference && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
