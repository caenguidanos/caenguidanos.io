/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { DefaultLayout } from "./shared-layout-default";

import type { PageWithLayout } from "../entity/shared-layout.entity";

const PageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World!</h1>
      </div>
   );
};

describe("shared-layout-default-layout", () => {
   it("should render", async () => {
      const { findAllByTestId } = render(<DefaultLayout page={<PageMock />} />);

      const layout = await findAllByTestId("__layout__");
      const page = await findAllByTestId("page");

      expect(layout).toBeTruthy();
      expect(page).toBeTruthy();
   });
});
