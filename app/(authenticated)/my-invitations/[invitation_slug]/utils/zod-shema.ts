import * as z from "zod";

const ImageSchema = z
  .any()
  .refine(
    (value) =>
      (value instanceof FileList &&
        (!value[0] || value[0].size <= MAX_FILE_SIZE)) ||
      typeof value === "string",
    {
      message: `Máximo tamaño de imagen es 5MB.`,
    }
  )
  .refine(
    (value) =>
      (value instanceof FileList &&
        (!value[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(value[0].type))) ||
      typeof value === "string",
    "Formatos permitidos: JPG, JPEG, PNG, WEBP"
  )
  .optional();

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
  brideImage: ImageSchema,
  eventDate: z.string().min(1, "Este campo es requerido"),
  eventDateImage: ImageSchema,
  welcomeMessage: z.string().min(1, "Este campo es requerido"),
  bibleVerse: z.string().min(1, "Este campo es requerido"),
  bibleReference: z.string().min(1, "Este campo es requerido"),
  bibleImage: ImageSchema,
  brideParents: z.string().min(1, "Este campo es requerido"),
  groomParents: z.string().min(1, "Este campo es requerido"),
  guestMessage: z.string().min(1, "Este campo es requerido"),
  dressCode: z.string().min(1, "Este campo es requerido"),
  specialRequest: z.string().min(1, "Este campo es requerido"),
  specialRequestImage: ImageSchema,
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
  giftRegistryType: z.string().optional(),
  giftRegistryLink: z.string().optional(),
  giftRegistryMsg: z.string().optional(),
});
