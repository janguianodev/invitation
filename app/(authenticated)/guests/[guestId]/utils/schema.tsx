import * as z from "zod";

export const GuestFormSchema = z.object({
  id: z.string().default(""),
  guestSlug: z.string().default(""),
  name: z.string().min(1, "El nombre es requerido"),
  phoneNumber: z.string().min(1, "El teléfono de contacto es requerido"),
  invitedPeople: z.coerce.number().optional(),
  confirmedPeople: z.coerce.number().optional().nullable(),
  confirmationCode: z.string().optional(),
  guestPasses: z.array(
    z.object({
      id: z.string().optional().default(""),
      name: z.string().default(""),
    })
  ),
  isGroup: z.boolean().default(true),
  parentGroupId: z.string().optional().nullable(),
});

export type GuestFormInputs = z.infer<typeof GuestFormSchema>;
