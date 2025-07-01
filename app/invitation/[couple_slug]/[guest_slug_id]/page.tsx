import { getInvitationDataBySlug } from "@/actions";
import { auth } from "@/auth.config";
import { InvitationDataI } from "@/interfaces";
import { Template1 } from "@/templates/Template1";
// import { Template1 } from "@/templates/Template1";
import { Template2 } from "@/templates/Template2";
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

  const brideName = invitationData?.couple?.partner1Name.split(" ")[0];
  const groomName = invitationData?.couple?.partner2Name.split(" ")[0];

  if (!invitationData) {
    return {
      title: "Invitación no encontrada",
      description: "La invitación que buscas no existe",
    };
  }

  return {
    title: `Boda ${brideName} & ${groomName}`,
    description: invitationData?.welcomeMessage,
    openGraph: {
      title: `Boda ${brideName} & ${groomName}`,
      description: invitationData?.welcomeMessage || "",
      images: [{ url: invitationData?.brideImage || "" }],
    },
  };
}

export default async function GuestInvitationPage({ params }: Props) {
  const { couple_slug, guest_slug_id } = params;

  //get server session
  const session = await auth();
  const loggedInUserEmail = session?.user.email || null;

  const invitationData: InvitationDataI | null = await getInvitationDataBySlug(
    couple_slug,
    guest_slug_id
  );

  if (!invitationData) {
    notFound();
  }

  if (loggedInUserEmail === "emilyangon15@gmail.com") {
    return <Template2 invitationData={invitationData} />;
  }
  return <Template1 invitationData={invitationData} />;
}
