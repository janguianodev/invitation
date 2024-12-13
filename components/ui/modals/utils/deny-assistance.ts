import * as z from "zod";

export const DenyAssistanceSchema = z.object({
  message: z.string().optional(),
});
export type DenyAssistanceInputs = z.infer<typeof DenyAssistanceSchema>;
