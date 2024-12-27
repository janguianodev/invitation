"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";
import { GuestFormInputs, GuestFormSchema } from "../utils/schema";
import { createOrUpdateGuest } from "@/actions";
import GuestPasses from "./GuestPasses";

interface Props {
  guest: Partial<GuestFormInputs>;
}

const AddEditGuestForm = ({ guest }: Props) => {
  const pathname = usePathname();
  const invitation_slug = pathname.split("/")[2];
  const router = useRouter();
  const { showAlert } = useAlert();

  const [numInvitedPeople, setNumInvitedPeople] = useState(
    guest.invitedPeople || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<GuestFormInputs>({
    defaultValues: guest,
    resolver: zodResolver(GuestFormSchema),
  });

  const handleInvitedPeopleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value, 10) || 0;

    setNumInvitedPeople(value);
  };

  const onSubmit = async (data: GuestFormInputs) => {
    const newData = { ...data, invitedPeople: +numInvitedPeople };
    const response = await createOrUpdateGuest(newData, invitation_slug);
    if (!response.ok) {
      showAlert(
        AlertVariant.ERROR,
        response.error || "Error creating/updating guest"
      );
      return;
    }
    showAlert(
      AlertVariant.SUCCESS,
      `Invitado ${guest?.id ? "Actualizado" : "Creado"} exitosamente`
    );
    router.replace(`/my-invitations/${invitation_slug}/guests`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="firstName">Nombre</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={errors.name ? "input-error" : "input-primary"}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="phoneNumber">Teléfono de contacto</label>
        <input
          id="phoneNumber"
          type="text"
          {...register("phoneNumber")}
          className={errors.phoneNumber ? "input-error" : "input-primary"}
        />
        {errors.phoneNumber && (
          <span className="text-red-500">{errors.phoneNumber.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="invitedPeople">Personas Invitadas</label>
        <input
          id="invitedPeople"
          type="number"
          onChange={handleInvitedPeopleChange}
          value={numInvitedPeople || ""}
          className={errors.invitedPeople ? "input-error" : "input-primary"}
        />
        {errors.invitedPeople && (
          <span className="text-red-500">{errors.invitedPeople.message}</span>
        )}
      </div>

      {/* Passes component*/}
      <GuestPasses
        control={control}
        numInvitedPeople={(numInvitedPeople ?? 0) as number}
      />

      <button type="submit" className="btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default AddEditGuestForm;
