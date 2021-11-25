import { test, expect, Locator } from "@playwright/test";

import { createStory } from "../.config/utils/test-context";

test(
   createStory({
      story: {
         as: "user",
         want: "go to the page and click the fetch button",
         for: "view the updated api response"
      },
      metadata: {
         title: "Navigate to page and click button",
         tags: ["simple-visitor"]
      }
   }),
   async ({ page }) => {
      // 1. Go to index page
      await page.goto("/");

      // 2. Get locators from DOM
      const HTMLButtonApiFetch: Locator = page.locator("button#indexPageApiFetchButton");
      const HTMLDivApiStateVisualizer: Locator = page.locator("div#indexPageApiStateVisualizer");

      // 3. Api data visualizer must be hidden
      expect(HTMLDivApiStateVisualizer).toBeHidden();

      // 4. Click on fetch button and wait api response
      const [response] = await Promise.all([
         page.waitForResponse("**/api/hello"),
         HTMLButtonApiFetch.click()
      ]);

      // 5. Check api response
      expect(response.ok()).toBe(true);

      // 6. Api data visualizer must be visible
      expect(HTMLDivApiStateVisualizer).toBeVisible();

      // 7. Api data content and visualizer content must be equal
      const json = await response.json();
      const content = await HTMLDivApiStateVisualizer.textContent();
      expect(content).toBe(JSON.stringify(json, undefined, 3));
   }
);
