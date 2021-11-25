import { test, expect } from "@playwright/test";

test("should response succesfully", async ({ request, baseURL }) => {
   const response = await request.get(`${baseURL}/api/hello`);

   expect(response.ok()).toBeTruthy();

   const json = await response.json();

   await expect(json.name).toBe("John Doe2");
});
