import { FaScroll } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { PiUsersThreeFill } from "react-icons/pi";

export const userRoutes = [
  {
    icon: <FiUser className="text-xl" />,
    label: "profile",
    path: "/profile",
  },
  {
    icon: <PiUsersThreeFill className="text-xl" />,
    label: "invitados",
    path: "/guests",
  },
  {
    icon: <FaScroll className="text-xl" />,
    label: "Mis invitaciones",
    path: "/my-invitations",
  },
];
