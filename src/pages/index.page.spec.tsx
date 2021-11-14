/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import Page from "./index.page";

describe("Index Page", () => {
   it("should render successfully", () => {
      const { baseElement } = render(<Page />);

      expect(baseElement).toBeTruthy();
   });
});
