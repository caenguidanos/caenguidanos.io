import { UsersRepository } from "./view-pages-index-data-access-users";

describe("ViewPagesIndexUsersRepository", () => {
   it("should create repo", async () => {
      const repository = new UsersRepository();
      const response = await repository.usersByIdQuery(1, { ttl: 3000 });
      expect(response).toBeTruthy();
   });
});
