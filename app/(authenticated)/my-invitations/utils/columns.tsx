import { renderActions } from "./actions";
import { InvitationsI } from "@/interfaces/invitations";

export const columns = {
  templateName: {
    name: "Plantilla seleccionada",
    width: "10%",
    getter: (invitation: InvitationsI) => invitation.template.templateName,
  },
  eventDate: {
    name: "Fecha del evento",
    width: "10%",
    getter: (invitation: InvitationsI) =>
      invitation.eventDate
        ? new Date(invitation.eventDate).toLocaleDateString()
        : "no configurado",
  },
  couple: {
    name: "Pareja",
    width: "10%",
    getter: (invitation: InvitationsI) =>
      invitation.couple
        ? `${invitation.couple.partner1Name} y ${invitation.couple.partner2Name}`
        : "no configurado",
  },
  createdAt: {
    name: "Creada el",
    width: "10%",
    getter: (invitation: InvitationsI) =>
      new Date(invitation.createdAt).toLocaleDateString(),
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (invitation: InvitationsI) => renderActions(invitation),
  },
};
