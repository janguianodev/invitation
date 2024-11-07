"use client";

import React, { useEffect } from "react";
import { Sections } from "./Sections";
import { useFieldArray, useForm } from "react-hook-form";
import { addEditTemplateSchema } from "../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues } from "../utils/initialValues";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";
import { useRouter } from "next/navigation";
import { TemplateImage } from "@/components";
import { createUpdateTemplate, deleteTemplateImage } from "@/actions";
import { TemplateI, TemplateImageI } from "@/interfaces";
import { TemplateSkeleton } from "./TemplateSkeleton";
import { FormInputs } from "../interfaces/FormInputs";

interface Props {
  template: Partial<TemplateI> & { image?: TemplateImageI[] };
  slug: string;
}

export const AddEditTemplate = ({ template, slug }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();
  const { showAlert } = useAlert();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      ...template,
      templateImage: undefined,
    },
    resolver: zodResolver(addEditTemplateSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "templateSections",
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();
    const { templateSections, templateImage, ...dataToSave } = data;

    if (template.id) {
      formData.append("id", template.id.toString());
    }

    formData.append("templateName", dataToSave.templateName);
    formData.append("description", dataToSave.description || "");
    formData.append("sections", JSON.stringify(templateSections));

    if (templateImage) {
      for (let i = 0; i < templateImage.length; i++) {
        formData.append("templateImage", templateImage[i]);
      }
    }

    const {
      ok,
      error,
      template: updatedTemplate,
    } = await createUpdateTemplate(formData);

    if (!ok) {
      showAlert(AlertVariant.ERROR, error || "Error creating template");
      return;
    }

    showAlert(AlertVariant.SUCCESS, "Template created successfully");
    router.replace(`/admin/templates/${updatedTemplate?.id}`);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <TemplateSkeleton slug={slug} />;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="templateName">
            Nombre
          </label>
          <input
            type="text"
            id="templateName"
            className={errors.templateName ? "input-error" : "input-primary"}
            {...register("templateName")}
          />
          {errors.templateName && (
            <span className="text-red-500">{errors.templateName.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            className={errors.description ? "input-error" : "input-primary"}
            {...register("description")}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-600" htmlFor="image">
            Imagen
          </label>
          <input
            type="file"
            id="templateImage"
            className={errors.templateImage ? "input-error" : "input-primary"}
            {...register("templateImage")}
            disabled={!!template.image?.length}
          />
          {errors.templateImage && (
            <span className="text-red-500">{errors.templateImage.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {template.image?.map((item) => (
            <div key={item.id}>
              <TemplateImage
                src={item.imageUrl}
                alt="Template image"
                width={200}
                height={200}
                className="rounded-t shadow-md"
              />
              <button
                type="button"
                onClick={() => deleteTemplateImage(item.id, item.imageUrl)}
                className="btn-danger w-[200px] rounded-b-xl"
              >
                Eliminar imagen
              </button>
            </div>
          ))}
        </div>

        <Sections
          append={append}
          remove={remove}
          errors={errors}
          watch={watch}
          fields={fields}
          setValue={setValue}
        />

        <button type="submit" className="btn-primary mt-4">
          Guardar
        </button>
      </form>
    </>
  );
};
