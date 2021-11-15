import { ChildProcess, ChildProcessWithoutNullStreams, spawn } from "child_process";
import { PlaywrightTestConfig } from "@playwright/test";

import type { PlaywrightGlobal } from "./playwright.types";

export default async function globalSetup(_config: PlaywrightTestConfig): Promise<void> {
   await new Promise<void>((resolve) => {
      const build: ChildProcess = spawn("next", ["build"], { stdio: "inherit" });

      build.on("close", () => resolve());
   });

   await new Promise<void>((resolve) => {
      const controller = new AbortController();

      const serve: ChildProcessWithoutNullStreams = spawn("next", ["start"], {
         signal: controller.signal
      });

      (globalThis as unknown as PlaywrightGlobal).playwrightServerController = controller;

      serve.stdout.once("data", () => resolve());

      serve.on("error", (error) => {
         if (error.name !== "AbortError") {
            console.error(error);

            process.exit(1);
         }
      });
   });
}
