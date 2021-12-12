export interface RepositoryQueryOptions {
   ttl: number;
   key: string;
}

export interface RepositoryResponse<K = unknown> {
   ts: number;
   ttl: number;
   data: K;
}

export class Repository {
   private repositoryCache = new Map<string, { ts: number; data: unknown }>();

   public cleanCache(): void {
      this.repositoryCache = new Map<string, { ts: number; data: unknown }>();
   }

   protected composeRequestContext(
      defaultKey: string,
      options: Partial<RepositoryQueryOptions> | undefined
   ): RepositoryQueryOptions {
      return {
         key: options?.key || defaultKey,
         ttl: options?.ttl || 0
      };
   }

   protected async cacheRequest<K = unknown>(
      options: RepositoryQueryOptions,
      request: () => Promise<K>
   ): Promise<RepositoryResponse<K>> {
      const timeStamp: number = Date.now();

      if (this.repositoryCache.has(options.key)) {
         const cachedResponse = this.repositoryCache.get(options.key);
         const timeElapsedFromPreviousRequest: number = timeStamp - cachedResponse.ts;

         if (timeElapsedFromPreviousRequest < options.ttl) {
            return new Promise((resolve) =>
               resolve({
                  ts: timeElapsedFromPreviousRequest,
                  ttl: options.ttl,
                  data: cachedResponse.data
               } as RepositoryResponse<K>)
            );
         }
      }

      const freshResponseData: unknown = await request();
      this.repositoryCache.set(options.key, { ts: timeStamp, data: freshResponseData });
      return new Promise((resolve) =>
         resolve({ ts: 0, ttl: options.ttl, data: freshResponseData } as RepositoryResponse<K>)
      );
   }
}
