import { UsersRepository } from "./view-pages-index-data-access-users";

describe("ViewPagesIndexUsersRepository", () => {
   let usersRepository: UsersRepository | undefined;

   beforeAll(() => {
      usersRepository = new UsersRepository();
   });

   afterEach(() => {
      usersRepository.cleanCache();
   });

   it("should create repo", async () => {
      const response = await usersRepository.queryUserById(1, { ttl: 3000 });
      expect(response).toBeTruthy();
   });
});
