import { GuestI } from "../interfaces/GuestInterface";
import { renderActions } from "./actions";

export const columns = {
  fullName: {
    name: "Nombre Completo",
    width: "20%",
    getter: (item: GuestI) => item.name || "No proporcionado",
  },
  phoneNumber: {
    name: "Teléfono",
    width: "10%",
    getter: (item: GuestI) => item.phoneNumber || "No proporcionado",
  },
  invitedPeople: {
    name: "Invitados",
    width: "5%",
    getter: (item: GuestI) => item.invitedPeople || 0,
  },
  confirmedPeople: {
    name: "Confirmados",
    width: "5%",
    getter: (item: GuestI) => item.confirmedPeople || 0,
  },
  invitationDetails: {
    name: "No asistirán",
    width: "5%",
    getter: (item: GuestI) =>
      (item.invitedPeople ?? 0) - (item.confirmedPeople ?? 0),
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (item: GuestI) => renderActions(item),
  },
};
