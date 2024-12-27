"use client";

import { FaLink } from "react-icons/fa";
import { GuestI } from "../interfaces/GuestInterface";
import { useAlert } from "@/hooks";
import { AlertVariant } from "@/utils";

interface Props {
  guest: GuestI;
  coupleSlug: string;
}

export const CopyInvitationLink = ({ guest, coupleSlug }: Props) => {
  const { showAlert } = useAlert();

  const onCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/invitation/${coupleSlug}/${guest.guestSlug}`
      );

      showAlert(AlertVariant.SUCCESS, "Link copiado al portapapeles");
    } catch (e) {
      console.error(e);
      showAlert(AlertVariant.ERROR, "Error copiando el link al portapapeles");
    }
  };
  return (
    <>
      <div className="text-gray-500 hover:text-green-600">
        <FaLink size={20} onClick={onCopyToClipboard} />
      </div>
    </>
  );
};
