"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ItineraryForm } from "./ItineraryForm";
import { GiftTable } from "./GiftTable";
import { InvitationSetupFormI } from "@/interfaces";
import { saveInvitationData } from "@/actions";
import { GiftTableType } from "../constants/gift-table";
import { invitationSetupInitialValues } from "../utils/initialValues";

export const InvitationSetupForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<InvitationSetupFormI>({
    defaultValues: invitationSetupInitialValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "itinerary",
  });

  // ! TODO: don't forget to get the couple_id in the invitation query, first I need to create the couple
  // !      and then I need to get the couple_id to save the invitation data

  // ! TODO: Add the image upload input to the sections that require an image upload
  // !      Add the validations needed like required, max size, format, etc
  // !      please do not forget this!

  const onSubmit = async (data: InvitationSetupFormI) => {
    if (
      data.giftTable.type === GiftTableType.Regalo ||
      data.giftTable.type === GiftTableType.Sobre
    ) {
      data.giftTable.link = "";
    }

    await saveInvitationData(data);
  };

  const newItinerary = {
    eventType: "",
    eventTime: "",
    eventLocation: "",
    eventAddress: "",
    eventAddressLink: "",
  };

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="brideName">
            Nombre de la novia
          </label>
          <input
            type="text"
            id="brideName"
            className={errors.brideName ? "input-error" : "input-primary"}
            {...register("brideName", { required: true })}
          />
          {errors.brideName && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="groomName">
            Nombre del novio
          </label>
          <input
            type="text"
            id="groomName"
            className={errors.groomName ? "input-error" : "input-primary"}
            {...register("groomName", { required: true })}
          />
          {errors.groomName && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="primaryColor">
            Color 1 de la invitación
          </label>
          <input
            type="color"
            id="primaryColor"
            className={errors.primaryColor ? "input-error" : "input-primary"}
            {...register("primaryColor", { required: true })}
          />
          {errors.primaryColor && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="secondaryColor">
            Color 2 de la invitación
          </label>
          <input
            type="color"
            id="secondaryColor"
            className={errors.secondaryColor ? "input-error" : "input-primary"}
            {...register("secondaryColor", { required: true })}
          />
          {errors.secondaryColor && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
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
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="brideParents">
            Papás de la novia{" "}
            <span className="text-xs text-gray-500">(separados por coma)</span>
          </label>
          <input
            type="text"
            id=""
            placeholder="Juan Perez, María González"
            className={errors.brideParents ? "input-error" : "input-primary"}
            {...register("brideParents", { required: true })}
          />
          {errors.brideParents && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="groomParents">
            Papás del novio{" "}
            <span className="text-xs text-gray-500">(separados por coma)</span>
          </label>
          <input
            type="text"
            id="groomParents"
            placeholder="Juan Perez, María González"
            className={errors.groomParents ? "input-error" : "input-primary"}
            {...register("groomParents", { required: true })}
          />
          {errors.groomParents && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
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
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="dressCode">
            Código de vestimenta
          </label>
          <input
            type="text"
            id="dressCode"
            {...register("dressCode", { required: true })}
            className={errors.dressCode ? "input-error" : "input-primary"}
          />
          {errors.dressCode && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
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

        <GiftTable errors={errors} register={register} watch={watch} />
      </div>

      <button type="submit" className="btn-primary">
        Guardar datos
      </button>
    </form>
  );
};
