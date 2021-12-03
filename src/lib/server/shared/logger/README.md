# shared-logger

> Environment: **nodejs**

## log

```ts
interface SharedLoggerLogOptions {
   depth?: number;
}

declare function log(value: unknown, options?: SharedLoggerLogOptions): void;
```

Logs to console with `util.inspect`.

```ts
import { log } from "$shared/logger";

function main(): void {
   const something = 56;

   log(something);
}

main();
```
