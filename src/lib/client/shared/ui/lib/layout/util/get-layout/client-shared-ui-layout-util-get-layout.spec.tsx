/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { PageWithLayout } from "../../entity/client-shared-ui-layout.entity";
import { DefaultLayout } from "../../feature/client-shared-ui-layout-default";
import { getLayout } from "./client-shared-ui-layout-util-get-layout";

const PageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World</h1>
      </div>
   );
};

describe("Client::UI::Layout::getLayout", () => {
   beforeEach(() => {
      // Remove layout
      PageMock.layout = undefined;
   });

   it("should get with layout", async () => {
      PageMock.layout = DefaultLayout;

      const DynamicLayout = getLayout(PageMock);

      const { findAllByTestId } = render(<DynamicLayout page={<PageMock />} />);

      const layout = await findAllByTestId("__layout__");
      const page = await findAllByTestId("page");

      expect(layout).toBeTruthy();
      expect(page).toBeTruthy();
   });

   it("should get without layout", async () => {
      const DynamicLayout = getLayout(PageMock);

      const { findAllByTestId } = render(<DynamicLayout page={<PageMock />} />);

      const page = await findAllByTestId("page");

      expect(page).toBeTruthy();
   });
});
