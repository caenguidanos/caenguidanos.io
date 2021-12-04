import { rest } from "msw";

export const handlers = [
   rest.get("https://jsonplaceholder.typicode.com/todos/1", (_req, res, ctx) => {
      return res(
         ctx.json({
            vaya: "tela"
         })
      );
   })
];
