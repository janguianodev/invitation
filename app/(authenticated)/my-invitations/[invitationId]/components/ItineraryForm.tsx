import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { IoMdRemoveCircle } from "react-icons/io";
import { eventTypes } from "../constants/itinerary";
import { InvitationSetupFormI } from "@/interfaces";
import { InvitationImages } from "./InvitationSetupForm";

interface Props {
  register: UseFormRegister<InvitationSetupFormI & InvitationImages>;
  errors: FieldErrors<InvitationSetupFormI & InvitationImages>;
  index: number;
  remove: (index: number) => void;
}

export const ItineraryForm = ({ register, errors, index, remove }: Props) => {
  const onRemoveItinerary = () => {
    if (index === 0) return;
    remove(index);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex flex-col gap-1">
          <label
            className="text-gray-600"
            htmlFor={`itinerary.${index}.eventType`}
          >
            Tipo de evento
          </label>
          <div className="flex flex-row gap-1 items-center">
            {index !== 0 && (
              <IoMdRemoveCircle
                type="button"
                size={28}
                className="btn-red text-red-500 hover:cursor-pointer hover:text-red-700"
                onClick={onRemoveItinerary}
              />
            )}
            <select
              id={`itinerary.${index}.eventType`}
              className={
                errors.itinerary && errors.itinerary?.[index]?.eventType
                  ? "input-error"
                  : "input-primary"
              }
              {...register(`itinerary.${index}.eventType`, { required: true })}
            >
              {eventTypes.map((eventType, index) => (
                <option key={index} value={eventType.value}>
                  {eventType.label}
                </option>
              ))}
            </select>
          </div>
          {errors.itinerary?.[index]?.eventType && (
            <span className="text-red-500">este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-gray-600"
            htmlFor={`itinerary.${index}.eventTime`}
          >
            Hora del evento
          </label>
          <input
            type="time"
            id={`itinerary.${index}.eventTime`}
            {...register(`itinerary.${index}.eventTime`, { required: true })}
            className={
              errors.itinerary && errors.itinerary?.[index]?.eventTime
                ? "input-error"
                : "input-primary"
            }
          />
          {errors.itinerary?.[index]?.eventTime && (
            <span className="text-red-500">este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-gray-600"
            htmlFor={`itinerary.${index}.eventLocation`}
          >
            Lugar del evento
          </label>
          <input
            type="text"
            id={`itinerary.${index}.eventLocation`}
            {...register(`itinerary.${index}.eventLocation`, {
              required: true,
            })}
            className={
              errors.itinerary && errors.itinerary?.[index]?.eventLocation
                ? "input-error"
                : "input-primary"
            }
          />
          {errors.itinerary?.[index]?.eventLocation && (
            <span className="text-red-500">este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-gray-600"
            htmlFor={`itinerary.${index}.eventAddress`}
          >
            Dirección del evento
          </label>
          <input
            type="text"
            id={`itinerary.${index}.eventAddress`}
            {...register(`itinerary.${index}.eventAddress`, { required: true })}
            className={
              errors.itinerary && errors.itinerary?.[index]?.eventAddress
                ? "input-error"
                : "input-primary"
            }
          />
          {errors.itinerary?.[index]?.eventAddress && (
            <span className="text-red-500">este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-gray-600"
            htmlFor={`itinerary.${index}.eventAddressLink`}
          >
            Link del lugar del evento
          </label>
          <input
            type="text"
            id={`itinerary.${index}.eventAddressLink`}
            {...register(`itinerary.${index}.eventAddressLink`, {
              required: true,
            })}
            className={
              errors.itinerary && errors.itinerary?.[index]?.eventAddressLink
                ? "input-error"
                : "input-primary"
            }
          />
          {errors.itinerary?.[index]?.eventAddressLink && (
            <span className="text-red-500">este campo es requerido</span>
          )}
        </div>
      </div>
    </div>
  );
};
