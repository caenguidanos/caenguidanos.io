import { setupServer, SetupServerApi } from "msw/node";

import { handlers } from "./handlers.msw";

export const server: SetupServerApi = setupServer(...handlers);
