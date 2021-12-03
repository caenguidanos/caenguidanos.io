# shared-io

> Environment: **nodejs**

## resolve

Resolve paths relative to `process.cwd()`.

```ts
declare function resolve(...args: string[]): string;
```

```ts
import { resolve } from "$shared/io";

const path: string = resolve("src", "tests", "e2e");
```
