import "@testing-library/jest-dom";

import { server } from "./specs/msw/lib/server.msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
