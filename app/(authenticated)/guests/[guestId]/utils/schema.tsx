import * as z from "zod";

export const GuestFormSchema = z.object({
  id: z.string().default(""),
  guestSlug: z.string().default(""),
  firstName: z.string().optional().default(""),
  lastName: z.string().optional().default(""),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
  invitedPeople: z.coerce.number().optional(),
  confirmedPeople: z.coerce.number().optional(),
  confirmationCode: z.coerce.number().optional(),
});

export type GuestFormInputs = z.infer<typeof GuestFormSchema>;
