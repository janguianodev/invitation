import { FaScroll } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export const userRoutes = [
  {
    icon: <FiUser className="text-xl" />,
    label: "profile",
    path: "/profile",
  },
  {
    icon: <FaScroll className="text-xl" />,
    label: "Mis invitaciones",
    path: "/my-invitations",
  },
];
