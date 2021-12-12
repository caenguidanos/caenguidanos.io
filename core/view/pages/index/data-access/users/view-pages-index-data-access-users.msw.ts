import { rest } from "msw";

const usersRepositoryMSW = [
   rest.get("https://jsonplaceholder.typicode.com/users/:id", (_req, res, ctx) => {
      return res(ctx.json({ ou: "mamma, this is nice" }));
   })
];

export default usersRepositoryMSW;
