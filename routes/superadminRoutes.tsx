import { FaScroll } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiLayoutHorizontalFill } from "react-icons/ri";

export const superadminRoutes = [
  {
    icon: <FiHome className="text-xl" />,
    label: "dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <FiHome className="text-xl" />,
    label: "users",
    path: "/admin/users",
  },
  {
    icon: <RiLayoutHorizontalFill className="text-xl" />,
    label: "templates",
    path: "/admin/templates",
  },
  {
    icon: <FaScroll className="text-xl" />,
    label: "invitaciones",
    path: "/admin/invitations",
  },
  {
    icon: <MdOutlinePayment className="text-xl" />,
    label: "pagos",
    path: "/admin/payments",
  },
  {
    icon: <PiUsersThreeFill className="text-xl" />,
    label: "invitados",
    path: "/guests",
  },
  {
    icon: <FaGear className="text-xl" />,
    label: "configuración",
    path: "/admin/settings",
  },
];
