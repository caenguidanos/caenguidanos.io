/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { useButton } from "./client-shared-ui-button-util-use-button";

describe("Client::UI::Button::useButton", () => {
   it("should render", () => {
      expect(useButton).toBeTruthy();
   });
});
