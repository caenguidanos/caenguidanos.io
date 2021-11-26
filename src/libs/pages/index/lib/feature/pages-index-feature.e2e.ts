import { test, expect } from "@playwright/test";

import { createStory } from "../../.playwright";

test(
   createStory({
      metadata: {
         title: "Index page",
         tags: ["pages", "index"]
      },
      story: {
         as: "user",
         want: "see index page",
         for: "enjoy"
      }
   }),
   async ({ page }) => {
      // 1. Do request to frame
      const response = await page.goto(`/iframe.html?id=pages-index--log-in`);

      // 2. Expect correct response status
      expect(response.ok()).toBeTruthy();
   }
);
