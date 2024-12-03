import * as z from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const InvitationSetupFormSchema = z.object({
  id: z.string().default(""),
  brideName: z.string().min(1, "Este campo es requerido"),
  groomName: z.string().min(1, "Este campo es requerido"),
  brideImage: z
    .any()
    .refine((files) => files.size <= MAX_FILE_SIZE, {
      message: `Máximo tamaño de imagen es 5MB.`,
    })
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files.type),
      "Formatos permitidos: JPG, JPEG, PNG, WEBP"
    )
    .optional(),
  eventDate: z.string().min(1, "Este campo es requerido"),
  eventDateImage: z
    .any()
    .refine((files) => files.size <= MAX_FILE_SIZE, {
      message: `Máximo tamaño de imagen es 5MB.`,
    })
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files.type),
      "Formatos permitidos: JPG, JPEG, PNG, WEBP"
    )
    .optional(),
  welcomeMessage: z.string().min(1, "Este campo es requerido"),
  bibleVerse: z.string().min(1, "Este campo es requerido"),
  bibleReference: z.string().min(1, "Este campo es requerido"),
  bibleImage: z
    .any()
    .refine((files) => files.size <= MAX_FILE_SIZE, {
      message: `Máximo tamaño de imagen es 5MB.`,
    })
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files.type),
      "Formatos permitidos: JPG, JPEG, PNG, WEBP"
    )
    .optional(),
  brideParents: z.string().min(1, "Este campo es requerido"),
  groomParents: z.string().min(1, "Este campo es requerido"),
  guestMessage: z.string().min(1, "Este campo es requerido"),
  dressCode: z.string().min(1, "Este campo es requerido"),
  specialRequest: z.string().min(1, "Este campo es requerido"),
  specialRequestImage: z
    .any()
    .refine((files) => files.size <= MAX_FILE_SIZE, {
      message: `Máximo tamaño de imagen es 5MB.`,
    })
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files.type),
      "Formatos permitidos: JPG, JPEG, PNG, WEBP"
    )
    .optional(),
  itinerary: z
    .array(
      z.object({
        eventType: z.string().min(1, "Este campo es requerido"),
        eventTime: z.string().min(1, "Este campo es requerido"),
        eventLocation: z.string().min(1, "Este campo es requerido"),
        eventAddress: z.string().min(1, "Este campo es requerido"),
        eventAddressLink: z.string().min(1, "Este campo es requerido"),
      })
    )
    .optional(),
  giftTable: z
    .object({
      message: z.string().min(1, "Este campo es requerido"),
      type: z.string().min(1, "Este campo es requerido"),
      link: z.string().min(1, "Este campo es requerido"),
    })
    .optional(),
});
