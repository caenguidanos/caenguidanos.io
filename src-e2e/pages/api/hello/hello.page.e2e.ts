import { test, expect } from "@playwright/test";

import { createStory } from "../../../.playwright";

test(
   createStory({
      metadata: {
         title: "Make request",
         tags: ["api", "hello"]
      },
      story: {
         as: "http client",
         want: "request updated data",
         for: "manage visualization on the frontend"
      }
   }),
   async ({ request }) => {
      // 1. Do request to endpoint
      const response = await request.get("/api/hello");

      // 2. Expect correct response status
      expect(response.ok()).toBeTruthy();

      // 3. Check if is valid body property
      const json = await response.json();
      await expect(json.name).toBe("John Doe2");
   }
);
