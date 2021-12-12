import "@testing-library/jest-dom/extend-expect";

import fetch from "isomorphic-fetch";
import * as msw from "./config/msw/server.msw";

export function loadIsomorphicFetch(): void {
   globalThis.fetch = fetch as unknown as typeof globalThis.fetch;
}

beforeAll(() => {
   loadIsomorphicFetch();

   msw.server.listen();
});

afterEach(() => {
   msw.server.resetHandlers();
});

afterAll(() => {
   msw.server.close();
});
