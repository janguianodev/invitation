import moment from "moment";
import "moment/locale/es";

export const formatDate = (date: Date): string => {
  moment.locale("es");
  return moment.utc(date).format("DD MMMM YYYY").toUpperCase();
};

export const getDaysToEvent = (eventDate: Date) => {
  const todayTime = new Date().getTime();
  const eventTime = eventDate.getTime();

  const daysDiff = Math.floor((eventTime - todayTime) / (1000 * 60 * 60 * 24));

  if (daysDiff > 30) {
    const monthsDiff = Math.floor(daysDiff / 30);
    const remainingDays = daysDiff % 30;

    return `${monthsDiff} meses ${remainingDays} días`;
  }

  if (daysDiff === 0) {
    return "Hoy";
  }

  if (daysDiff < 0) {
    return "Gracias por acompañarnos";
  }

  return `${daysDiff} día${daysDiff > 1 ? "s" : ""}`;
};
