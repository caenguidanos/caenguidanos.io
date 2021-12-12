import { UsersRepository } from "../../data-access/users/view-pages-index-data-access-users";

export function useUsersRepository(): UsersRepository {
   return new UsersRepository();
}
