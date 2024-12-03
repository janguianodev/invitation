import { InvitationSetupFormI } from "@/interfaces";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import { ItineraryForm } from "../components/ItineraryForm";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
  fields: FieldArrayWithId<InvitationSetupFormI, "itinerary", "id">[];
  append: UseFieldArrayAppend<InvitationSetupFormI, "itinerary">;
  remove: UseFieldArrayRemove;
  newItinerary: {
    eventType: string;
    eventTime: string;
    eventLocation: string;
    eventAddress: string;
    eventAddressLink: string;
  };
}

export const Itinerary = ({
  append,
  errors,
  fields,
  register,
  remove,
  newItinerary,
}: Props) => {
  return (
    <div className="flex flex-col gap-1 md:col-span-2">
      <div className="flex justify-between items-center">
        <p className="text-gray-600 font-semibold">Itinerario</p>
        <button
          type="button"
          className="btn-gray"
          onClick={() => append(newItinerary)}
        >
          Agregar evento
        </button>
      </div>
      {fields.map((field, index) => (
        <ItineraryForm
          key={field.id}
          index={index}
          register={register}
          errors={errors}
          remove={remove}
        />
      ))}
    </div>
  );
};
