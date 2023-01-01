import { publicProcedure, router } from "../trpc";
import { JLPTVocab, JLPTWord } from "../../../types/typings";

import z from "zod";

export const vocabRouter = router({
  byLevel: publicProcedure
    .input(
      z.object({
        limit: z.number(),
        cursor: z.number().nullish(),
        level: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { level, limit, cursor } = input;

      const response = await fetch(
        `https://jlpt-vocab-api.vercel.app/api/words?level=${level}${
          cursor && cursor > 0 ? `&offset=${cursor}` : ""
        }&limit=${limit}`
      );

      const vocabs: JLPTVocab = await response.json();
      let nextCursor: typeof cursor | undefined = undefined;
      if (vocabs.words.length === limit) {
        nextCursor = vocabs.offset + 1;
      }

      return { vocabs, nextCursor };
    }),
  random: publicProcedure
    .input(z.object({ level: z.number().gte(1).lte(5).optional() }))
    .query(async ({ input }) => {
      const { level } = input;

      const response = await fetch(
        `https://jlpt-vocab-api.vercel.app/api/words/random${
          level ? `?level=${level}` : ""
        }`
      );

      const data: JLPTWord = await response.json();

      return data;
    }),
});
