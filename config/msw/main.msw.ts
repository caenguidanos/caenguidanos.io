if (process.env.NODE_ENV !== "production") {
   if (typeof window === "undefined") {
      const { server } = require("./server.msw");
      server.listen();
   } else {
      const { worker } = require("./browser.msw");
      worker.start();
   }
}

export {};
