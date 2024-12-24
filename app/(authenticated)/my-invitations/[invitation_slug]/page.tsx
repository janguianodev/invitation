import { Title } from "@/components";
import { InvitationSetupForm } from "./components/InvitationSetupForm";
import { getInvitation } from "@/actions";

interface Props {
  params: {
    invitation_slug: string;
  };
}

export default async function InvitationPage({ params }: Props) {
  const { invitation_slug } = params;

  const invitation = await getInvitation(invitation_slug);

  const title =
    invitation_slug === "new" ? "Crear invitacion" : "Editar invitacion";

  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <Title title={title} />

      <div className="bg-white rounded">
        <InvitationSetupForm
          invitation={invitation ?? {}}
          slug={invitation_slug}
        />
      </div>
    </div>
  );
}
