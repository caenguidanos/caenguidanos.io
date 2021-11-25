import { test, expect, Locator } from "@playwright/test";

/**
 * {AS}: user,
 * {I WANT}: go to the page and click the fetch button,
 * {FOR}: view the updated api response.
 */
test("user clicks on fetch button", async ({ page }) => {
   await page.goto("/");

   const HTMLButtonApiFetch: Locator = page.locator("button#indexPageApiFetchButton");
   const HTMLDivApiStateVisualizer: Locator = page.locator("div#indexPageApiStateVisualizer");

   // Api data not exists yet and cotainer must be hidden
   expect(HTMLDivApiStateVisualizer).toBeHidden();

   // Click on fetcher
   const [response] = await Promise.all([
      page.waitForResponse("**/api/hello"),
      HTMLButtonApiFetch.click()
   ]);

   // Return correct status
   expect(response.ok()).toBe(true);

   // Api data must be show
   expect(HTMLDivApiStateVisualizer).toBeVisible();

   // Gets the api response
   const json = await response.json();

   // Gets the visualizer content
   const content = await HTMLDivApiStateVisualizer.textContent();

   // Visualizer content and api response body must be equal
   expect(content).toBe(JSON.stringify(json, undefined, 3));
});
