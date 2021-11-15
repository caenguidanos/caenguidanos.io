import { test, expect } from "@playwright/test";

test("should response succesfully", async ({ request, baseURL }) => {
   const response = await request.get(`${baseURL}/api/hello`);

   expect(response.ok()).toBeTruthy();

   const body = await response.json();

   await expect(body).toStrictEqual({ name: "John Doe" });
});
