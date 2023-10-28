import { type LucideIcon } from "lucide-react";

export interface NavbarRoute {
  label: string;
  href: string;
  target?: string;
  icon?: LucideIcon;
  color?: string;
  childRoutes?: NavbarRoute[];
}
