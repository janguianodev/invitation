import { Title } from "@/components";
import { getGuestByIdAndInvitation } from "@/actions";
import AddEditGuestForm from "./components/AddEditGuestForm";

interface Props {
  params: {
    guestId: string;
  };
  searchParams: {
    invitationId?: string;
  };
}

export default async function GuestPage({ params, searchParams }: Props) {
  const rawInvitationId = searchParams.invitationId;
  const invitationId: number = rawInvitationId ? parseInt(rawInvitationId) : 0;

  const { guestId } = params;

  const guest = await getGuestByIdAndInvitation(guestId, invitationId);

  const title = !guest ? "Crear invitado" : "Editar invitado";

  return (
    <div>
      <Title title={title} />

      <div className="bg-white rounded p-4">
        <AddEditGuestForm guest={guest} invitationId={invitationId} />
      </div>
    </div>
  );
}
