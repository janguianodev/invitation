"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";
import { GuestFormInputs, GuestFormSchema } from "../utils/schema";
import { createOrUpdateGuest } from "@/actions";

const normalizeGuestData = (
  guest: Partial<GuestFormInputs> | undefined
): GuestFormInputs => ({
  firstName: guest?.firstName ?? "",
  lastName: guest?.lastName ?? "",
  email: guest?.email ?? "",
  phoneNumber: guest?.phoneNumber ?? "",
  invitedPeople:
    typeof guest?.invitedPeople === "string"
      ? parseInt(guest.invitedPeople, 10)
      : guest?.invitedPeople ?? 0,
  confirmedPeople:
    typeof guest?.confirmedPeople === "string"
      ? parseInt(guest.confirmedPeople, 10)
      : guest?.confirmedPeople ?? 0,
  confirmationCode:
    typeof guest?.confirmationCode === "string"
      ? parseInt(guest.confirmationCode, 10)
      : guest?.confirmationCode ?? undefined,
  guestSlug: guest?.guestSlug ?? "",
  id: guest?.id ?? "",
});

const AddEditGuestForm = ({
  guest,
  invitationId,
}: {
  guest?: Partial<GuestFormInputs>;
  invitationId: number;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestFormInputs>({
    defaultValues: normalizeGuestData(guest),
    resolver: zodResolver(GuestFormSchema),
  });

  const router = useRouter();
  const { showAlert } = useAlert();

  const onSubmit = async (data: GuestFormInputs) => {
    const response = await createOrUpdateGuest(data, invitationId);
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
    router.replace("/guests");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="firstName">Nombre</label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", { required: "First Name is required" })}
          className={errors.firstName ? "input-error" : "input-primary"}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label htmlFor="lastName">Apellido</label>
        <input
          id="lastName"
          type="text"
          {...register("lastName", { required: "Last Name is required" })}
          className={errors.lastName ? "input-error" : "input-primary"}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className={errors.email ? "input-error" : "input-primary"}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Teléfono</label>
        <input
          id="phoneNumber"
          type="text"
          {...register("phoneNumber")}
          className={errors.phoneNumber ? "input-error" : "input-primary"}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>

      <div>
        <label htmlFor="invitedPeople">Personas Invitadas</label>
        <input
          id="invitedPeople"
          type="number"
          {...register("invitedPeople", {
            valueAsNumber: true,
            required: "Invited People is required",
            validate: (value) => value! >= 0 || "Value must be positive",
          })}
          className={errors.invitedPeople ? "input-error" : "input-primary"}
        />
        {errors.invitedPeople && <span>{errors.invitedPeople.message}</span>}
      </div>

      <button type="submit" className="btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default AddEditGuestForm;
