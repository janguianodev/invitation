import * as z from "zod";

export const createSchema = (invitedPeople: number) =>
  z.object({
    confirmedGuests: z
      .number({
        required_error: "Por favor selecciona el número de invitados",
      })
      .min(1, "Debe haber al menos un invitado")
      .max(
        invitedPeople,
        `No puedes seleccionar más de ${invitedPeople} pases`
      ),
    guestPasses: z
      .array(
        z.object({
          name: z
            .string()
            .min(1, "El nombre es obligatorio")
            .max(50, "El nombre no puede tener más de 50 caracteres"),
        })
      )
      .min(1, "Debes añadir al menos un pase")
      .max(invitedPeople, `No puedes añadir más de ${invitedPeople} pases`),
  });

export type ConfirmAssistanceInputs = z.infer<ReturnType<typeof createSchema>>;
