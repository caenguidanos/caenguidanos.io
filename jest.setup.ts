import "@testing-library/jest-dom";

import { server } from "$config/msw/server.msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
