import { Star } from "lucide-react";

import { Logo } from "./logo";
import { SidebarItem } from "./sidebar-item";
import type { NavbarRoute } from "~/types/navbar-route";
import { usePathname } from "next/navigation";

const NavbarRoutes: NavbarRoute[] = [
  {
    label: "Premium",
    icon: Star,
    href: "/premium",
    color: "text-yellow-500",
  },
  {
    label: "Features",
    href: "#",
    childRoutes: [
      {
        label: "Automations",
        href: "#",
      },
      {
        label: "Levelling",
        href: "#",
      },
      {
        label: "Message Builder",
        href: "#",
      },
    ],
  },
  {
    label: "Documentation",
    href: "#",
    childRoutes: [
      {
        label: "Exult Bot",
        href: "#",
      },
      {
        label: "Exult Bot Public API",
        href: "#",
      },
    ],
  },
  {
    label: "Discord",
    href: "/discord",
    target: "_blank",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="py-6">
        <Logo />
      </div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex w-full flex-col">
          {NavbarRoutes.map((route) => (
            <SidebarItem
              key={route.label}
              isActive={pathname === route.href}
              route={route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
