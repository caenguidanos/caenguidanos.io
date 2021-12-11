import { inspect } from "util";

import type { LoggerLogOptions } from "../entity-log/logger-server-entity-log";

export function log(value: unknown, options?: LoggerLogOptions): void {
   const result = inspect(value, false, options?.depth ?? 100, true);

   console.log(result);
}
