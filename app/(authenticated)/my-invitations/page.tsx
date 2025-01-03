import { Table, Title } from "@/components";
import Link from "next/link";
import { InvitationsI } from "@/interfaces";
import { getUserInvitations } from "@/actions";
import { columns } from "./[invitation_slug]/utils/columns";
import { renderActions } from "./[invitation_slug]/utils/actions";

export default async function InvitationsPage() {
  const invitations: InvitationsI[] = await getUserInvitations();

  return (
    <div>
      <Title title="Invitaciones" />

      <div className="flex justify-end mb-5">
        <Link href="/my-invitations/new" className="btn-primary">
          Crear Invitación
        </Link>
      </div>

      <div className="mb-10 mt-4">
        {invitations!.length === 0 ? (
          <p className="text-center text-gray-500 mt-16">
            No hay invitaciones creadas
          </p>
        ) : (
          <Table<InvitationsI>
            columns={columns}
            payload={invitations}
            renderActions={renderActions}
          />
        )}
      </div>
    </div>
  );
}
