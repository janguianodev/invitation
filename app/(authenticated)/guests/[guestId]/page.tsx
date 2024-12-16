import { Title } from "@/components";
import { getGuestByIdAndInvitation } from "@/actions";
import AddEditGuestForm from "./components/AddEditGuestForm";

interface Props {
  params: {
    guestId: string;
  };
}

export default async function GuestPage({ params }: Props) {
  const { guestId } = params;

  const guest = await getGuestByIdAndInvitation(guestId);

  const title = !guest ? "Crear invitado" : "Editar invitado";

  return (
    <div>
      <Title title={title} />

      <div className="bg-white rounded p-4">
        <AddEditGuestForm guest={guest ?? {}} />
      </div>
    </div>
  );
}
