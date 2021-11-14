import { test, expect } from "@playwright/test";

test("should response succesfully", async ({ request }) => {
   const response = await request.get("/api/hello");

   expect(response.ok()).toBeTruthy();

   const body = await response.json();

   await expect(body).toStrictEqual({ name: "John Doe" });
});
