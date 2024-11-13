import * as z from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const addEditTemplateSchema = z.object({
  templateName: z.string().min(1, "El nombre de la plantilla es requerido"),
  description: z.string().min(1, "La descripción de la plantilla es requerida"),
  templateImage: z
    .any()
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `Máximo tamaño de imagen es 5MB.`,
    })
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files[0].type),
      "Formatos permitidos: JPG, JPEG, PNG, WEBP"
    )
    .optional(),
  templateSections: z
    .array(
      z.object({
        id: z.number().optional(),
        sectionName: z.string(),
        requiresImage: z.boolean(),
      })
    )
    .min(1, "Debes seleccionar al menos una sección"),
});
