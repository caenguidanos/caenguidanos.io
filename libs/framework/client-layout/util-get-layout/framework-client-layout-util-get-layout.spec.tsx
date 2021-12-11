/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { PageWithLayout } from "../entity-shared/framework-client-layout-entity-page-with-layout";
import { DefaultLayout } from "../ui-default-layout/framework-client-layout-ui-default-layout";

import { getLayout } from "./framework-client-layout-util-get-layout";

const PageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World</h1>
      </div>
   );
};

describe("FrameworkClientLayoutUtilGetLayout", () => {
   beforeEach(() => {
      // Remove layout
      PageMock.layout = undefined;
   });

   it("should get with layout", async () => {
      PageMock.layout = DefaultLayout;

      const DynamicLayout = getLayout(PageMock);

      render(<DynamicLayout page={<PageMock />} />);

      const [layout] = await screen.findAllByTestId("__layout__");
      const [page] = await screen.findAllByTestId("page");

      expect(layout).toBeInTheDocument();
      expect(page).toBeInTheDocument();
   });

   it("should get without layout", async () => {
      const DynamicLayout = getLayout(PageMock);

      render(<DynamicLayout page={<PageMock />} />);

      const [page] = await screen.findAllByTestId("page");

      expect(page).toBeInTheDocument();
   });
});
