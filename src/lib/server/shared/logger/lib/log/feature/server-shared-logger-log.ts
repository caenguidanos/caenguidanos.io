import { inspect } from "util";

import type { SharedLoggerLogOptions } from "../entity/server-shared-logger-log.entity";

export function log(value: unknown, options?: SharedLoggerLogOptions): void {
   const result = inspect(value, false, options?.depth ?? 100, true);

   console.log(result);
}
