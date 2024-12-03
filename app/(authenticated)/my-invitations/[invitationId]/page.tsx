import { getInvitationSections } from "@/actions";
import { InvitationSetupForm } from "./components/InvitationSetupForm";

interface Props {
  params: {
    invitationId: string;
  };
}

export default async function InvitationPage({ params }: Props) {
  const { invitationId } = params;

  const invitationSections = await getInvitationSections(invitationId);

  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <div className="">
        <h1 className="text-xl">Datos de la invitación</h1>
      </div>

      <div className="bg-white rounded">
        <InvitationSetupForm invitationSections={invitationSections || []} />
      </div>
    </div>
  );
}
