import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import type { NavbarRoute } from "~/types/navbar-route";

export const SidebarItem = ({
  route,
  isActive = false,
  isChild = false,
}: {
  route: NavbarRoute;
  isActive?: boolean;
  isChild?: boolean;
}) => {
  if (!route.childRoutes) {
    return (
      <Link
        href={route.href}
        target={route.target || "_self"}
        className={cn(
          "group flex w-full justify-start rounded-lg text-sm font-medium transition hover:bg-white/10 hover:text-white",
          isActive ? "bg-white/10 text-white" : "text-zinc-400",
          isChild ? "pl-3 pt-3 text-zinc-300 first:pt-0" : "p-3",
          route.color,
        )}
      >
        {route.label}
      </Link>
    );
  } else {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-lg border-none px-3 text-sm font-medium text-zinc-400 shadow-none transition"
      >
        <AccordionItem value={route.label}>
          <AccordionTrigger>{route.label}</AccordionTrigger>
          <AccordionContent>
            {route.childRoutes.map((child) => (
              <SidebarItem route={child} key={child.href} isChild />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
};
