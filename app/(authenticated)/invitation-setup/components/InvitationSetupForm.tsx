"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ItineraryForm } from "./ItineraryForm";
import { InvitationSetupFormI } from "@/interfaces";
import { saveInvitationData } from "@/actions";
import { GiftTableType } from "../constants/gift-table";
import { invitationSetupInitialValues } from "../utils/initialValues";
import { GiftRegistry } from "./GiftRegistry";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvitationSetupFormSchema } from "../utils/zod-shema";

export interface InvitationImages {
  brideImage: FileList;
  bibleImage: FileList;
  eventDateImage: FileList;
  specialRequestImage: FileList;
}

export const InvitationSetupForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<InvitationSetupFormI & InvitationImages>({
    defaultValues: invitationSetupInitialValues,
    resolver: zodResolver(InvitationSetupFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "itinerary",
  });

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
            {...register("brideName")}
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
            {...register("groomName")}
          />
          {errors.groomName && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="image">
            Imagen de la novia
          </label>
          <input
            type="file"
            id="brideImage"
            className={errors.brideImage ? "input-error" : "input-primary"}
            {...register("brideImage")}
          />
          {errors.brideImage && (
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
            {...register("eventDate")}
          />
          {errors.eventDate && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="image">
            Imagen de la fecha del evento
          </label>
          <input
            type="file"
            id="eventDateImage"
            className={errors.eventDateImage ? "input-error" : "input-primary"}
            {...register("eventDateImage")}
          />
          {errors.eventDateImage && (
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
            {...register("welcomeMessage")}
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
            {...register("bibleVerse")}
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
            {...register("bibleReference")}
          />
          {errors.bibleReference && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="image">
            Imagen de la biblia
          </label>
          <input
            type="file"
            id="bibleImage"
            className={errors.bibleImage ? "input-error" : "input-primary"}
            {...register("bibleImage")}
          />
          {errors.bibleImage && (
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
            {...register("brideParents")}
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
            {...register("groomParents")}
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
            {...register("guestMessage")}
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
            {...register("dressCode")}
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
            {...register("specialRequest")}
          />
          {errors.specialRequest && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="image">
            Imagen de la petición especial
          </label>
          <input
            type="file"
            id="specialRequestImage"
            className={
              errors.specialRequestImage ? "input-error" : "input-primary"
            }
            {...register("specialRequestImage")}
          />
          {errors.specialRequestImage && (
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

        <GiftRegistry errors={errors} register={register} watch={watch} />
      </div>

      <button type="submit" className="btn-primary">
        Guardar datos
      </button>
    </form>
  );
};
