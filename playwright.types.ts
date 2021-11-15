export type PlaywrightGlobal = typeof globalThis & {
   playwrightServerController: AbortController;
};
