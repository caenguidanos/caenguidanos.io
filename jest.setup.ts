import "@testing-library/jest-dom";

import { server } from "./src/specs/msw/lib/server.msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
