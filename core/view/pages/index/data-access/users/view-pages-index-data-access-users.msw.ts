import { rest } from "msw";

const usersRepositoryMSW = [
   rest.get("https://jsonplaceholder.typicode.com/users/:id", (_req, res, ctx) => {
      return res(ctx.json({ id: "1", name: "Hello", lastname: "World" }));
   }),
   rest.get("https://jsonplaceholder.typicode.com/users", (_req, res, ctx) => {
      return res(
         ctx.json([
            { id: "1", name: "Hello", lastname: "World" },
            { id: "2", name: "Hello", lastname: "React" }
         ])
      );
   })
];

export default usersRepositoryMSW;
