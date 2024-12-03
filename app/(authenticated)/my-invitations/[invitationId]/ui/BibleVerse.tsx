import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
}

export const BibleVerse = ({ register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600" htmlFor="bibleVerse">
        Versículo de la biblia
      </label>
      <input
        type="text"
        id="bibleVerse"
        className={errors.bibleVerse ? "input-error" : "input-primary"}
        {...register("bibleVerse", { required: true })}
      />
      {errors.bibleVerse && (
        <span className="text-red-500">Este campo es requerido</span>
      )}
    </div>
  );
};
