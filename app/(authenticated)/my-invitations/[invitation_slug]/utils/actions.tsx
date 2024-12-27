import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { InvitationsI } from "@/interfaces";
import { FaUsers } from "react-icons/fa";

export const renderActions = async (item: InvitationsI) => {
  return (
    <div className="flex space-x-2">
      <Link
        href={`/my-invitations/${item.id}`}
        className="text-gray-500 hover:text-green-600"
      >
        <MdModeEdit size={25} />
      </Link>
      <Link
        href={`/my-invitations/${item.id}/guests`}
        className="text-gray-500 hover:text-green-600"
      >
        <FaUsers size={25} />
      </Link>
    </div>
  );
};
