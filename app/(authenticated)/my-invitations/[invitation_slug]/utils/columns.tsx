import { InvitationsI } from "@/interfaces";
import { renderActions } from "./actions";

export const columns = {
  brideName: {
    name: "Nombre de la novia",
    width: "10%",
    getter: (item: InvitationsI) =>
      item.couple?.partner1Name || "No proporcionado",
  },
  groomName: {
    name: "Nombre del novio",
    width: "10%",
    getter: (item: InvitationsI) =>
      item.couple?.partner2Name || "No proporcionado",
  },
  brideParents: {
    name: "Papás de la novia",
    width: "10%",
    getter: (item: InvitationsI) => item.brideParents || "No proporcionado",
  },
  groomParents: {
    name: "Papás de la novio",
    width: "10%",
    getter: (item: InvitationsI) => item.groomParents || "No proporcionado",
  },
  eventDate: {
    name: "Dia del evento",
    width: "10%",
    getter: (item: InvitationsI) =>
      item.eventDate
        ? new Date(item.eventDate).toLocaleDateString()
        : "No proporcionado",
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (item: InvitationsI) => renderActions(item),
  },
};
