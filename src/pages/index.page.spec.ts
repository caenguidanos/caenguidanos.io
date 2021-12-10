import { test, expect } from "@playwright/test";

test.describe("Index page", () => {
   /**
    * {AS} user;
    * {WANT} to go to the page and click the fetch button;
    * {FOR} view the updated api data;
    */
   test("should go to page and fetch new data", async ({ page }) => {
      const locatorDiv = page.locator("div#indexPageApiStateVisualizer");
      const locatorButton = page.locator("button#indexPageApiFetchButton");

      await page.goto("/");

      await expect(locatorDiv).toBeHidden();

      const [response] = await Promise.all([
         page.waitForResponse("**/api/hello"),
         locatorButton.click()
      ]);

      expect(response.ok()).toBe(true);
      await expect(locatorDiv).toBeVisible();

      const responseContent = await response.json();
      const locatorDivContent = await locatorDiv.textContent();

      expect(locatorDivContent).toBe(
         JSON.stringify(responseContent, undefined, 3)
      );
   });
});
