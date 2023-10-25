import { TRPCError } from "@trpc/server";
import { TRPC_ERROR_CODES_BY_NUMBER } from "@trpc/server/rpc";
import axios from "axios";
import { getServerSession } from "next-auth";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const discordRouter = createTRPCRouter({
  test: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      return "andehx.";

      const user = await ctx.db.user.findUnique({
        where: { id: input.id },
        include: { accounts: true },
      });

      if (!user) {
        return "No user";
      }

      try {
        const response = await axios.get(
          "https://discordapp.com/api/users/@me",
          {
            headers: {
              Authorization: `Bearer ${user.accounts[0]?.access_token}`,
            },
          },
        );
        return response.data.username;
      } catch (error) {
        return "ID didn't work";
      }
    }),
});
