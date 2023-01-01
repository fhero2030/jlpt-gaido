// src/server/trpc/router/_app.ts
import { router } from "../trpc";

import { vocabRouter } from "./vocab";

export const appRouter = router({
  vocab: vocabRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
