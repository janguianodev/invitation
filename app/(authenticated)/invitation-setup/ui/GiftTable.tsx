import { InvitationSetupFormI } from "@/interfaces";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { GiftRegistry } from "../components/GiftRegistry";

interface Props {
  register: UseFormRegister<InvitationSetupFormI>;
  errors: FieldErrors<InvitationSetupFormI>;
  watch: UseFormWatch<InvitationSetupFormI>;
}

export const GiftTable = ({ errors, register, watch }: Props) => {
  return <GiftRegistry errors={errors} register={register} watch={watch} />;
};
