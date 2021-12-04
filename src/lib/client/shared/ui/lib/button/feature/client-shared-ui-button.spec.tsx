/**
 * @jest-environment jsdom
 */
import { Button } from "./client-shared-ui-button";

describe("Client::UI::Button", () => {
   it("should render", () => {
      expect(Button).toBeTruthy();
   });
});
