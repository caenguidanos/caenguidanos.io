export async function main(): Promise<void> {
   if (typeof window === "undefined") {
      const { server } = require("./server.msw");
      server.listen();
   } else {
      const { worker } = require("./browser.msw");
      await worker.start();
   }
}

main();
