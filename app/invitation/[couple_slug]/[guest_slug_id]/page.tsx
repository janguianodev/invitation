import { getInvitationDataBySlug } from "@/actions";
import { InvitationDataI } from "@/interfaces";
import { Template1 } from "@/templates/Template1";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    couple_slug: string;
    guest_slug_id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const couple_slug = params.couple_slug;
  const guest_slug_id = params.guest_slug_id;

  const invitationData = await getInvitationDataBySlug(
    couple_slug,
    guest_slug_id
  );

  return {
    title: `Boda ${invitationData?.couple?.partner1Name.split(" ")[0]} & ${
      invitationData?.couple?.partner2Name.split(" ")[0]
    }`,
    description: invitationData?.welcomeMessage,
    openGraph: {
      title: `Boda ${invitationData?.couple?.partner1Name.split(" ")[0]} & ${
        invitationData?.couple?.partner2Name.split(" ")[0]
      }`,
      description: invitationData?.welcomeMessage || "",
      images: [{ url: invitationData?.brideImage || "" }],
    },
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
