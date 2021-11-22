import * as CONSTANTS from "./index";

describe("shared-constants", () => {
   it("should contain required values", () => {
      expect(CONSTANTS.EMPTY_STRING).toBe("");
   });
});
