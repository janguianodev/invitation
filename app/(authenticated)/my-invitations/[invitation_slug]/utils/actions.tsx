import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { InvitationsI } from "@/interfaces";

export const renderActions = async (item: InvitationsI) => {
  return (
    <div className="flex space-x-2">
      <Link
        href={`/my-invitations/${item.id}`}
        className="text-gray-500 hover:text-green-600"
      >
        <MdModeEdit size={20} />
      </Link>
    </div>
  );
};
