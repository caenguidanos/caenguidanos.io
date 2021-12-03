import { jest } from "@jest/globals";

import { log } from "./server-shared-logger-log";

describe("shared-logger log", () => {
   it("should log successfully", () => {
      console.log = jest.fn();

      log({ hey: "joe" });

      expect(console.log).toBeCalledTimes(1);
   });

   it("should log successfully with depth", () => {
      console.log = jest.fn();

      log({ hey: "joe" }, { depth: 1_000 });

      expect(console.log).toBeCalledTimes(1);
   });
});
