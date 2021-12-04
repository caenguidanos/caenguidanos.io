import { setupWorker, SetupWorkerApi } from "msw";

import { handlers } from "./handlers.msw";

export const worker: SetupWorkerApi = setupWorker(...handlers);
