import { test, expect } from "@playwright/test";

test("should navigate", async ({ page }) => {
   await page.goto("/");

   await expect(page.locator("h1")).toContainText("Index page");
});
