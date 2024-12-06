import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { GuestI } from "../interfaces/GuestInterface";
import { DeleteGuest } from "../components/DeleteGuest";
import { CopyInvitationLink } from "../components/CopyInvitationLink";
import { getCoupleSlug } from "@/actions";

export const renderActions = async (item: GuestI) => {
  const coupleSlug = await getCoupleSlug();

  return (
    <div className="flex space-x-2">
      <Link
        href={`/guests/${item.id}`}
        className="text-gray-500 hover:text-green-600"
      >
        <MdModeEdit size={20} />
      </Link>
      <CopyInvitationLink
        guest={item}
        coupleSlug={coupleSlug.coupleSlug ?? ""}
      />
      <DeleteGuest guest={item} />
    </div>
  );
};
