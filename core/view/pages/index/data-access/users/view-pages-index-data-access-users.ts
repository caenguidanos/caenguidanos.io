import { Singleton } from "$caenguidanos.io/typescript";
import { Repository, RepositoryQueryOptions, RepositoryResponse } from "$caenguidanos.io/framework";

@Singleton()
export class UsersRepository extends Repository {
   public async queryUsers(options?: Partial<RepositoryQueryOptions>): Promise<RepositoryResponse<string>> {
      const requestContext = this.composeRequestContext("Users", options);

      return this.cacheRequest<string>(requestContext, async () => {
         const url: RequestInfo = `https://jsonplaceholder.typicode.com/users`;
         const response = await fetch(url);
         if (response.ok) {
            const responseBody = await response.json();
            return JSON.stringify(responseBody, undefined, 4);
         }
         return response.statusText;
      });
   }

   public async queryUserById(
      id: number,
      options?: Partial<RepositoryQueryOptions>
   ): Promise<RepositoryResponse<string>> {
      const requestContext = this.composeRequestContext(`UserById${id}`, options);

      return this.cacheRequest<string>(requestContext, async () => {
         const url: RequestInfo = `https://jsonplaceholder.typicode.com/users/${id}`;
         const response = await fetch(url);
         if (response.ok) {
            const responseBody = await response.json();
            return JSON.stringify(responseBody, undefined, 4);
         }
         return response.statusText;
      });
   }
}
