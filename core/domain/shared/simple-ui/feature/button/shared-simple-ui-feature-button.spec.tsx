/**
 * @jest-environment jsdom
 */
import { render, cleanup } from "@testing-library/react";

import { Button } from "./shared-simple-ui-feature-button";

describe("SharedSimpleUiFeatureButton", () => {
   afterEach(() => {
      cleanup();
   });

   it("should render", () => {
      const view = render(<Button id="test" load={true} />);
      expect(view).toBeTruthy();
   });
});
