import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "~/components/ui/button";

import { getServerAuthSession } from "~/server/auth";

export const LandingNavbar = async () => {
  const session = await getServerAuthSession();

  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="flex items-center">
        <div className="relative mr-4 h-8 w-44">
          <Image fill alt="logo" src="/logo-dark-full.png" />
        </div>
      </Link>
      <div className="flex items-center gap-x-8">
        <Link
          className="group flex items-center gap-x-2 font-medium text-[#EAB308] hover:brightness-110"
          href="/premium"
        >
          <Star className="h-4 w-4 animate-pulse fill-[#EAB308] group-hover:animate-none" />
          Premium
        </Link>
        <Link href="/features" className="font-medium hover:text-white/80">
          Features
        </Link>
        <Link href="/docs" className="font-medium hover:text-white/80">
          Documentation
        </Link>
        <Link
          href="/discord"
          target="_blank"
          className="font-medium hover:text-white/80"
        >
          Discord
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <Link href={!!session ? "/dashboard" : "/api/auth/signin"}>
          <Button variant="secondary" className="rounded-xl">
            {!!session ? "Dashboard" : "Log In"}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
