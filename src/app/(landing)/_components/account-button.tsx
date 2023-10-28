"use client";

import Image from "next/image";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export const AccountButton = () => {
  const { data: profile, isLoading: profileLoading } =
    api.discord.minimalProfile.useQuery();

  if (profileLoading) return <div />;

  return (
    <Link href={!!profile ? "/dashboard" : "/api/auth/signin"}>
      <Button variant="secondary" className="rounded-xl">
        {!!profile ? "Dashboard" : "Log In"}
      </Button>
    </Link>
  );
};
