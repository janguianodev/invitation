"use client";

import { InvitationSections } from "@/utils";
import React, { useEffect } from "react";
import {
  FieldErrors,
  UseFormWatch,
  FieldArrayWithId,
  UseFormSetValue,
} from "react-hook-form";
import { FormInputs, Section } from "../interfaces/FormInputs";

interface Props {
  append: (value: Section) => void;
  remove: (index: number) => void;
  errors: FieldErrors<FormInputs>;
  watch: UseFormWatch<FormInputs>;
  setValue: UseFormSetValue<FormInputs>;
  fields: FieldArrayWithId<FormInputs, "templateSections", "id">[];
}

export const Sections = ({
  append,
  remove,
  errors,
  watch,
  setValue,
  fields,
}: Props) => {
  const watchSections = watch("templateSections");

  useEffect(() => {
    fields.forEach((field) => {
      const sectionExists = watchSections.some(
        (section) => section.sectionName === field.sectionName
      );
      if (!sectionExists) {
        append({
          id: field.id,
          sectionName: field.sectionName,
          requiresImage: field.requiresImage,
        });
      }
    });
  }, [fields, append, watchSections]);

  const handleAddSection = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionKey: string
  ) => {
    const sectionExists = fields.find(
      (field) => field.sectionName === sectionKey
    );
    if (!sectionExists && e.target.checked) {
      append({ sectionName: sectionKey, requiresImage: false });
    } else if (!e.target.checked) {
      const index = fields.findIndex(
        (field) => field.sectionName === sectionKey
      );
      remove(index);
    }
  };

  // Actualiza el valor de requiresImage usando setValue para que se refleje correctamente
  const handleRequiresImage = (sectionKey: string, isChecked: boolean) => {
    const index = watchSections.findIndex(
      (section) => section.sectionName === sectionKey
    );
    if (index >= 0) {
      setValue(`templateSections.${index}.requiresImage`, isChecked, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="flex flex-col gap-1 mt-4">
      <label className="text-gray-600" htmlFor="sections">
        Secciones
      </label>
      {errors.templateSections && (
        <span className="text-red-500">
          Debes seleccionar al menos una sección
        </span>
      )}
      {Object.entries(InvitationSections).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={key}
              checked={
                watchSections?.some((section) => section.sectionName === key) ??
                false
              }
              onChange={(e) => handleAddSection(e, key)}
            />
            <label htmlFor={key}>{value}</label>
          </div>

          {/* "La sección requiere una imagen?" */}
          {watchSections?.some((section) => section.sectionName === key) && (
            <div className="flex items-center gap-2 ml-4">
              <input
                type="checkbox"
                id={`${key}-requiresImage`}
                checked={
                  watchSections?.find((section) => section.sectionName === key)
                    ?.requiresImage ?? false
                }
                onChange={(e) => handleRequiresImage(key, e.target.checked)}
              />
              <label htmlFor={`${key}-requiresImage`}>
                ¿La sección requiere una imagen?
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
