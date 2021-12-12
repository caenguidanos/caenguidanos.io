import { Singleton } from "$caenguidanos.io/typescript";

@Singleton()
export class UsersRepository {
   private usersByIdCache = new Map<number, { ttl: number; data: string }>();

   public usersByIdCacheRefresh() {
      this.usersByIdCache = new Map<number, { ttl: number; data: string }>();
   }

   public async usersByIdQuery(id: number, options?: { ttl?: number }): Promise<string> {
      if (options?.ttl) {
         const t1: number = Date.now();
         const userCachedById = this.usersByIdCache.get(id);

         if (userCachedById) {
            const timeElapsed: number = t1 - userCachedById.ttl;

            if (timeElapsed < options.ttl) {
               return userCachedById.data;
            }
         }

         const data = await this.usersByIdQueryRequest(id);
         this.usersByIdCache.set(id, { ttl: t1, data });
         return data;
      }

      return this.usersByIdQueryRequest(id);
   }

   private async usersByIdQueryRequest(id: number) {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/".concat(`${id}`));

      if (response.ok) {
         const responseBody = await response.json();
         const stringifiedUser = JSON.stringify(responseBody, undefined, 4);
         return stringifiedUser;
      }

      return "";
   }
}

export function useUsersRepository(): UsersRepository {
   return new UsersRepository();
}
