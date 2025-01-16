import { ExportCSV, GuestsSummary, Table, Title } from "@/components";
import Link from "next/link";
import {
  getGroomBrideNames,
  getGuestsByInvitationId,
  getGuestsSummary,
} from "@/actions";
import { columns } from "./utils/columns";
import { GuestI } from "./interfaces/GuestInterface";
import { renderActions } from "./utils/actions";
import { getOrganizedGuestsByInvitationId } from "@/actions/guest/get-organized-guests";

interface Props {
  params: {
    invitation_slug: string;
  };
}

export default async function GuestsPage({ params }: Props) {
  const { invitation_slug } = params;

  const guests: GuestI[] = await getGuestsByInvitationId(invitation_slug);
  const organizedGuestData = await getOrganizedGuestsByInvitationId(
    invitation_slug
  );
  const guestsSummary = await getGuestsSummary(invitation_slug);
  const { brideName, groomName } = await getGroomBrideNames(invitation_slug);

  return (
    <div>
      <Title
        title={`Boda de ${brideName} & ${groomName}`}
        subtitle="Lista de Invitados"
      />
      <GuestsSummary data={guestsSummary} />

      <div className="flex flex-col justify-between mb-5 mt-3 gap-3 md:flex-row md:items-center md:justify-between md:gap-3">
        <ExportCSV data={organizedGuestData} />
        <Link
          href={`/my-invitations/${invitation_slug}/guests/new`}
          className="btn-primary text-center"
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
