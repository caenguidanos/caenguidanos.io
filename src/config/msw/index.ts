if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
   if (typeof window === "undefined") {
      const { server } = require("./server.msw");

      server.listen();
   } else {
      const { worker } = require("./browser.msw");

      worker.start();
   }
}

export {};
