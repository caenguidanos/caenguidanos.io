/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { DefaultLayout } from "./client-shared-ui-layout-default";
import { PageWithLayout } from "../entity/client-shared-ui-layout.entity";

const PageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World!</h1>
      </div>
   );
};

describe("Client::UI::Layout::Default", () => {
   it("should render", async () => {
      const { findAllByTestId } = render(<DefaultLayout page={<PageMock />} />);

      const layout = await findAllByTestId("__layout__");
      const page = await findAllByTestId("page");

      expect(layout).toBeTruthy();
      expect(page).toBeTruthy();
   });
});
