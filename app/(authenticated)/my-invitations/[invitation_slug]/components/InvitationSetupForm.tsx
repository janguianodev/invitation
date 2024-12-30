"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { ItineraryForm } from "./ItineraryForm";
import { InvitationSetupFormI, InvitationsI } from "@/interfaces";
import { saveInvitationData } from "@/actions";
import { GiftRegistry } from "./GiftRegistry";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvitationSetupFormSchema } from "../utils/zod-shema";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";
import { TemplateImage } from "@/components";
import { useRouter } from "next/navigation";
import { cleanFormData } from "../utils/cleanFormData";
import { validateImageSrc } from "../utils/validateImgSrc";
import { initializeDefaultValues } from "../utils/initializeDefaultValues";
import { InvitationImages } from "@/interfaces/invitation-setup-form";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";

interface Props {
  invitation: Partial<InvitationsI | unknown>;
  slug: string;
}

export const InvitationSetupForm = ({ invitation, slug }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const invitationTyped = invitation as Partial<InvitationsI>;
  const router = useRouter();

  const defaultValues = initializeDefaultValues(slug, invitation);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<InvitationSetupFormI & InvitationImages>({
    defaultValues,
    resolver: zodResolver(InvitationSetupFormSchema),
  });

  const { showAlert } = useAlert();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itinerary",
  });

  const onSubmit = async (data: InvitationSetupFormI & InvitationImages) => {
    setIsSubmitting(true);
    const formData = new FormData();
    const cleanedItinerary = data.itinerary?.filter((event) => event.eventType);
    const cleanedData = {
      ...data,
      itinerary: cleanedItinerary,
    };

    const { formValues } = cleanFormData(cleanedData, formData);

    const response = await saveInvitationData(formValues);
    if (!response.ok) {
      showAlert(AlertVariant.ERROR, "Error al crear la invitación");
      setIsSubmitting(false);
      return;
    }
    reset();

    showAlert(
      AlertVariant.SUCCESS,
      `Invitación ${slug === "new" ? "creada" : "actualizada"} con éxito`
    );
    router.push("/my-invitations");
    setIsSubmitting(false);
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
        <div></div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="image">
            Imagen de la novia
          </label>
          <input
            type="file"
            id="brideImage"
            {...register("brideImage")}
            className={errors.brideImage ? "input-error" : "input-primary"}
          />
          {errors.brideImage && (
            <span className="text-red-500">{errors.brideImage.message}</span>
          )}
          {(watch("brideImage") || invitationTyped.brideImage) && (
            <TemplateImage
              src={validateImageSrc(invitationTyped.brideImage as string)}
              alt="Imagen de la novia"
              width={200}
              height={200}
              priority
            />
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
          {(watch("eventDateImage") || invitationTyped.eventDateImage) && (
            <TemplateImage
              src={validateImageSrc(invitationTyped.eventDateImage as string)}
              alt="Imagen de la fecha del evento"
              width={200}
              height={200}
              priority
            />
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
          {(watch("bibleImage") || invitationTyped.bibleImage) && (
            <TemplateImage
              src={validateImageSrc(invitationTyped.bibleImage as string)}
              alt="Imagen de la biblia"
              width={200}
              height={200}
              priority
            />
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
          {(watch("specialRequestImage") ||
            invitationTyped.specialRequestImage) && (
            <TemplateImage
              src={validateImageSrc(
                invitationTyped.specialRequestImage as string
              )}
              alt="Imagen de la petición especial"
              width={200}
              height={200}
              priority
            />
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

      <button
        type="submit"
        className="btn-primary flex justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <FiLoader className="animate-spin text-2xl" />
        ) : (
          "Guardar cambios"
        )}
      </button>
    </form>
  );
};
