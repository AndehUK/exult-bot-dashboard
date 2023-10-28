import { TRPCError } from "@trpc/server";
import { TRPC_ERROR_CODES_BY_NUMBER } from "@trpc/server/rpc";
import axios from "axios";
import { getServerAuthSession } from "~/server/auth";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const discordRouter = createTRPCRouter({
  minimalProfile: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      include: { accounts: true },
    });

    if (!user) {
      return null;
    }

    return {
      username: ctx.session.user.name,
      pfp: ctx.session.user.image,
    };
  }),
});
