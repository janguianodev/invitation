import { GuestI } from "../interfaces/GuestInterface";
import { renderActions } from "./actions";

export const columns = {
  fullName: {
    name: "Nombre Completo",
    width: "20%",
    getter: (item: GuestI) => `${item.firstName || ""} ${item.lastName || ""}`,
  },
  email: {
    name: "Correo Electrónico",
    width: "20%",
    getter: (item: GuestI) => item.email || "No proporcionado",
  },
  phoneNumber: {
    name: "Teléfono",
    width: "15%",
    getter: (item: GuestI) => item.phoneNumber || "No proporcionado",
  },
  invitedPeople: {
    name: "Invitados",
    width: "10%",
    getter: (item: GuestI) => item.invitedPeople || 0,
  },
  confirmedPeople: {
    name: "Confirmados",
    width: "10%",
    getter: (item: GuestI) => item.confirmedPeople || 0,
  },
  invitationDetails: {
    name: "Detalles de Invitación",
    width: "15%",
    getter: (item: GuestI) =>
      item.invitation && item.invitation.eventDate
        ? `Evento: ${item.invitation.eventDate.toLocaleDateString()}`
        : "Sin invitación",
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (item: GuestI) => renderActions(item),
  },
};
