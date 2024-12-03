import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { GuestI } from "../interfaces/GuestInterface";
import { DeleteGuest } from "../components/DeleteGuest";

export const renderActions = (item: GuestI) => {
  return (
    <div className="flex space-x-2">
      <Link
        href={`/guests/${item.id}?invitationId=${item.invitation?.id}`}
        className="text-gray-500 hover:text-green-600"
      >
        <MdModeEdit size={20} />
      </Link>
      <DeleteGuest guest={item} />
    </div>
  );
};
