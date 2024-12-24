import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
// import { getCoupleSlug } from "@/actions";
import { InvitationsI } from "@/interfaces";

export const renderActions = async (item: InvitationsI) => {
  //   const coupleSlug = await getCoupleSlug();

  return (
    <div className="flex space-x-2">
      <Link
        href={`/my-invitations/${item.id}`}
        className="text-gray-500 hover:text-green-600"
      >
        <MdModeEdit size={20} />
      </Link>
      {/* <CopyInvitationLink
        guest={item}
        coupleSlug={coupleSlug.coupleSlug ?? ""}
      />
      <DeleteGuest guest={item} /> */}
    </div>
  );
};
