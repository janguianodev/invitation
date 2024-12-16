import { GuestsSummary, Table, Title } from "@/components";
import Link from "next/link";
import { getGuestsByInvitationId, getGuestsSummary } from "@/actions";
import { columns } from "./utils/columns";
import { GuestI } from "./interfaces/GuestInterface";
import { renderActions } from "./utils/actions";

export default async function GuestsPage() {
  const guests: GuestI[] = await getGuestsByInvitationId();
  const guestsSummary = await getGuestsSummary();

  return (
    <div>
      <GuestsSummary data={guestsSummary} />

      <Title title="Invitados" />

      <div className="flex justify-end mb-5">
        <Link href="/guests/new" className="btn-primary">
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
