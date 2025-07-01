import moment from "moment";
import "moment/locale/es";

export const formatDate = (date: Date): string => {
  moment.locale("es");
  return moment.utc(date).format("DD MMMM YYYY").toUpperCase();
};

// Función para calcular los días hasta un evento y regresa un mensaje adecuado
export const getDaysToEvent = (eventDate: Date) => {
  const today = moment.utc().startOf("day");
  const event = moment.utc(eventDate).startOf("day");

  // Si las fechas son iguales
  if (today.isSame(event)) {
    return "Hoy";
  }

  // Si la fecha ya pasó
  if (today.isAfter(event)) {
    // short thanks message
    return "Gracias";
  }

  // Calcula la diferencia en días
  const totalDays = event.diff(today, "days");

  // Si es más de 1 mes
  if (totalDays > 30) {
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;
    return `${months} mes${months > 1 ? "es" : ""} ${days} día${
      days !== 1 ? "s" : ""
    }`;
  }

  // Si está en el rango de días
  return `${totalDays} día${totalDays !== 1 ? "s" : ""}`;
};

// Función para calcular el tiempo hasta un evento en meses y días
export function getTimeToEventInMonthsAndDays(eventDate: Date) {
  const today = moment.utc().startOf("day");
  const event = moment.utc(eventDate).startOf("day");

  const diffMs = event.diff(today, "milliseconds");

  if (diffMs <= 0) return { months: 0, days: 0 };

  // calcular meses y días
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  return { months, days };
}
