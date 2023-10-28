"use client";

import * as React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Exult Bot",
    href: "#",
    description:
      "Learn how to effectively use Exult Bot's features to take your Discord Server to the next level!",
  },
  {
    title: "Exult Bot Public API",
    href: "#",
    description:
      "Learn how to extend the functionality of Exult Bot by integrating our Public API into your applications!",
  },
];

export function NavigationItems() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/premium" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "group flex h-10 w-max items-center justify-center gap-x-2 px-4 py-2 text-sm font-medium text-[#EAB308] transition-colors hover:bg-none hover:brightness-110",
                pathname === "/premium" && "font-bold",
              )}
            >
              <Star
                className={cn(
                  "h-4 w-4 animate-pulse fill-[#EAB308] group-hover:animate-none",
                  pathname === "/premium" && "animate-none",
                )}
              />
              Premium
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <Image
                      src="/logo-dark.png"
                      alt="logo"
                      className="h-12 w-12"
                      height={256}
                      width={256}
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Exult Bot
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Bringing joy through the world's digital playground.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Automations">
                Build your own bot with Automations!
              </ListItem>
              <ListItem href="#" title="Levelling">
                Encourage and reward user activity with Levelling!
              </ListItem>
              <ListItem href="#" title="Message Builder">
                Build fancy messages with full embed support with our Message
                Builder!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/discord" legacyBehavior passHref>
            <NavigationMenuLink
              target="_blank"
              className={navigationMenuTriggerStyle()}
            >
              Discord
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
