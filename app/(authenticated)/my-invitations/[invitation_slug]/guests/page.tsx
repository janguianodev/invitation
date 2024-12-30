import { GuestsSummary, Table, Title } from "@/components";
import Link from "next/link";
import { getGuestsByInvitationId, getGuestsSummary } from "@/actions";
import { columns } from "./utils/columns";
import { GuestI } from "./interfaces/GuestInterface";
import { renderActions } from "./utils/actions";

interface Props {
  params: {
    invitation_slug: string;
  };
}

export default async function GuestsPage({ params }: Props) {
  const { invitation_slug } = params;

  const guests: GuestI[] = await getGuestsByInvitationId(invitation_slug);
  const guestsSummary = await getGuestsSummary(invitation_slug);

  return (
    <div>
      <GuestsSummary data={guestsSummary} />

      <Title title="Lista de Invitados" />

      <div className="flex justify-end mb-5">
        <Link
          href={`/my-invitations/${invitation_slug}/guests/new`}
          className="btn-primary"
        >
          Crear Invitado
        </Link>
      </div>

      <div className="mb-10 mt-4">
        {guests!.length === 0 ? (
          <p className="text-center text-gray-500 mt-16">
            No hay invitados creados
          </p>
        ) : (
          <Table<GuestI>
            columns={columns}
            payload={guests}
            renderActions={renderActions}
          />
        )}
      </div>
    </div>
  );
}
