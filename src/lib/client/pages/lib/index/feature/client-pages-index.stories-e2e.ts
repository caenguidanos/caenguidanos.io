import { test, expect } from "@playwright/test";

test.describe("Pages::Index", () => {
   /*
    * {AS} navigator;
    * {WANT} to render the page;
    * {FOR} to get standard quality code;
    */
   test("should render the page", async ({ page }) => {
      const response = await page.goto(`/iframe.html?id=pages-index--default`);

      expect(response.ok()).toBeTruthy();
   });
});
