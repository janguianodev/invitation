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
    getter: (item: GuestI) => {
      if (item.confirmedPeople === null) return "No ha respondido";

      return item.confirmedPeople;
    },
  },
  invitationDetails: {
    name: "No asistirán",
    width: "5%",
    getter: (item: GuestI) => {
      if (item.confirmedPeople === null) return "No ha respondido";

      return (item.invitedPeople ?? 0) - (item.confirmedPeople ?? 0);
    },
  },
  message: {
    name: "Mensaje",
    width: "20%",
    getter: (item: GuestI) => {
      if (item.confirmedPeople === null) return "No ha respondido";

      if (item.confirmedPeople && item.confirmedPeople > 0) return "No aplica";

      return item.message || "-";
    },
  },
  actions: {
    name: "Acciones",
    width: "10%",
    getter: (item: GuestI) => renderActions(item),
  },
};
