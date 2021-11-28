import { test, expect } from "@playwright/test";

test.describe("UI Button", () => {
   /**
    * {AS} navigator;
    * {WANT} to render the button;
    * {FOR} to get standard quality code;
    */
   test("should render the button", async ({ page }) => {
      const response = await page.goto(`/iframe.html?id=ui-button--base`);

      expect(response.ok()).toBeTruthy();
   });
});
