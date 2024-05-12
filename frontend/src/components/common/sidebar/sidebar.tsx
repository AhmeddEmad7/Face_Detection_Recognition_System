import { Link } from "@tanstack/react-router";
import { Home, LineChart, SquareUser, UserSearch } from "lucide-react";

const sidebarLinks = [
  {
    title: "Home",
    icon: Home,
    to: "/",
  },
  {
    title: "Face Detection",
    icon: SquareUser,
    to: "/face-detection",
  },
  {
    title: "Face Recognition",
    icon: UserSearch,
    to: "/face-recognition",
  },
  {
    title: "System Performance",
    icon: LineChart,
    to: "/performance",
  },
];

function Sidebar() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {sidebarLinks.map((link) => (
        <Link
          key={link.title}
          to={link.to}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          activeProps={{
            className:
              "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary",
          }}
        >
          <link.icon className="h-4 w-4" />
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;
