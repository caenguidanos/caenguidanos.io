import { jest } from "@jest/globals";

import { log } from "./logger-client-feature-log";

describe("LoggerClientFeatureLog", () => {
   it("should log successfully", () => {
      console.log = jest.fn();

      log({ hey: "joe" });

      expect(console.log).toBeCalledTimes(1);
   });

   it("should log successfully with depth", () => {
      console.log = jest.fn();

      log({ hey: "joe" });

      expect(console.log).toBeCalledTimes(1);
   });
});
