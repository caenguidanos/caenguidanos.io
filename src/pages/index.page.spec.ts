import { test } from "@playwright/test";

test.describe("Index page", () => {
   /**
    * {AS} user;
    * {WANT} to go to the page and click the fetch button;
    * {FOR} view the updated api data;
    */
   test("should go to page and fetch new data", async ({ page }) => {
      await page.goto("/");
   });
});
