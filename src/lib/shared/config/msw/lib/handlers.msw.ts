import { rest } from "msw";

export const handlers = [
   rest.get("/api/hello", (_req, res, ctx) => {
      return res(ctx.json({ ou: "mamma, this is nice" }));
   })
];
