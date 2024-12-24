import { InvitationsI } from "@/interfaces";
import { renderActions } from "./actions";

export const columns = {
  groomParents: {
    name: "groomParents",
    width: "20%",
    getter: (item: InvitationsI) => item.groomParents || "No proporcionado",
  },
  brideParents: {
    name: "brideParents",
    width: "10%",
    getter: (item: InvitationsI) => item.brideParents || "No proporcionado",
  },
  coupleSlug: {
    name: "coupleSlug",
    width: "5%",
    getter: (item: InvitationsI) =>
      item.couple?.coupleSlug || "No proporcionado",
  },
  eventDate: {
    name: "eventDate",
    width: "5%",
    getter: (item: InvitationsI) =>
      item.eventDate?.toString() || "No proporcionado",
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (item: InvitationsI) => renderActions(item),
  },
};
