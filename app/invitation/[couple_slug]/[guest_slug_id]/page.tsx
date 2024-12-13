import { getInvitationDataBySlug } from "@/actions";
import { InvitationDataI } from "@/interfaces";
import { Template1 } from "@/templates/Template1";
import { notFound } from "next/navigation";

interface Props {
  params: {
    couple_slug: string;
    guest_slug_id: string;
  };
}

export default async function GuestInvitationPage({ params }: Props) {
  const { couple_slug, guest_slug_id } = params;

  const invitationData: InvitationDataI | null = await getInvitationDataBySlug(
    couple_slug,
    guest_slug_id
  );

  if (!invitationData) {
    notFound();
  }

  return <Template1 invitationData={invitationData} />;
}
