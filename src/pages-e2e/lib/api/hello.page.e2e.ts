import { test, expect } from "@playwright/test";

test.describe("API hello", () => {
   /**
    * {AS} http-client;
    * {WANT} to request updated data;
    * {FOR} for manage view in frontend;
    */
   test("should retrieve data", async ({ request }) => {
      const response = await request.get("/api/hello");
      const repsonseBody = await response.json();

      expect(response.ok()).toBeTruthy();
      expect(repsonseBody.name).toBe("John Doe2");
   });
});
