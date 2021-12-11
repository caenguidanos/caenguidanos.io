import "@testing-library/jest-dom";

import { server } from "../msw/server.msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
