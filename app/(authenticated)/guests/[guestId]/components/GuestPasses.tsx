"use client";

import React, { useState } from "react";
import { useFieldArray, Control } from "react-hook-form";
import { GuestFormInputs } from "../utils/schema";

interface Props {
  control: Control<GuestFormInputs>;
  numInvitedPeople: number;
}

const GuestPasses = ({ control, numInvitedPeople }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "guestPasses",
  });

  const [removedFields, setRemovedFields] = useState<
    GuestFormInputs["guestPasses"]
  >([]);

  React.useEffect(() => {
    const currentLength = fields.length;

    if (numInvitedPeople > currentLength) {
      // Get removed fields or create new ones
      const missingCount = numInvitedPeople - currentLength;
      for (let i = 0; i < missingCount; i++) {
        const recoveredField = removedFields.shift();
        append(recoveredField || { id: "", name: "" });
      }
      setRemovedFields([...removedFields]); // Update removedFields state
    } else if (numInvitedPeople < currentLength) {
      // Move excess fields to removedFields
      const excessCount = currentLength - numInvitedPeople;
      const newlyRemoved = fields.slice(-excessCount).map((field) => ({
        id: field.id,
        name: field.name,
      }));
      setRemovedFields([...newlyRemoved, ...removedFields]);
      for (let i = 0; i < excessCount; i++) {
        remove(currentLength - i - 1);
      }
    }
  }, [numInvitedPeople, fields, append, remove, removedFields]);

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <div key={field.id}>
          <label htmlFor={`guestPasses.${index}.name`}>
            Nombre del Pase {index + 1}
          </label>
          <input
            id={`guestPasses.${index}.name`}
            type="text"
            {...control.register(`guestPasses.${index}.name`, {
              required: "El nombre del pase es requerido",
            })}
            className="input-primary"
          />
        </div>
      ))}
    </div>
  );
};

export default GuestPasses;
