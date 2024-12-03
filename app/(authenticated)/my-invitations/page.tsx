import { Table, Title } from "@/components";
import { renderActions } from "./utils/actions";
import { columns } from "./utils/columns";
import { getUserInvitations } from "@/actions";
import { InvitationsI } from "@/interfaces";

export default async function MyInvitationsPage() {
  const allInvitations = await getUserInvitations();

  return (
    <div>
      <Title title="Mis invitaciones" />

      <div className="mb-10 mt-4">
        {allInvitations.length === 0 ? (
          <p className="text-center text-gray-500 mt-16">
            No tienes invitaciones creadas
          </p>
        ) : (
          <Table<InvitationsI>
            columns={columns}
            payload={allInvitations}
            renderActions={renderActions}
          />
        )}
      </div>
    </div>
  );
}
