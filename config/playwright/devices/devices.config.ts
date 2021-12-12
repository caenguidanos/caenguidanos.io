import { devices, PlaywrightTestConfig } from "@playwright/test";

export const playwrightDevices = [
   {
      name: "Desktop Chrome",
      use: {
         trace: "on",
         video: "on",
         screenshot: "on",
         ...devices["Desktop Chrome"]
      }
   },
   {
      name: "Tablet Android",
      use: {
         trace: "on",
         video: "on",
         screenshot: "on",
         ...devices["Galaxy Tab S4"]
      }
   },
   {
      name: "Mobile Android",
      use: {
         trace: "on",
         video: "on",
         screenshot: "on",
         ...devices["Pixel 5"]
      }
   }
] as PlaywrightTestConfig["projects"];
