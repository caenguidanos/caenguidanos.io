export async function main(): Promise<void> {
   if (process.env.NEXT_PUBLIC_MSW === "enabled") {
      if (typeof window === "undefined") {
         const { server } = require("./lib/server.msw");
         server.listen();
      } else {
         const { worker } = require("./lib/browser.msw");
         await worker.start();
      }
   }
}

main();
