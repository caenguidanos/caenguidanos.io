import { test } from "@playwright/test";

test("Index Page", async ({ page }) => {
   await page.goto("/");
});
