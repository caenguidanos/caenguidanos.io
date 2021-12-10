import "@testing-library/jest-dom";

import { server } from "$lib/shared/config/msw/lib/server.msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
