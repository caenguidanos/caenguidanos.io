/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import { Layout, PageWithLayout } from "../../entity/shared-framework-entity";
import { getLayout } from "./shared-framework-util-get-layout";

const PageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World</h1>
      </div>
   );
};

const LayoutMock: Layout = ({ page }) => {
   return <main data-testid="layout">{page}</main>;
};

describe("SharedFrameworkUtilGetLayout", () => {
   beforeEach(() => {
      PageMock.layout = undefined;
   });

   it("should get with layout", async () => {
      PageMock.layout = LayoutMock;

      const DynamicLayout = getLayout(PageMock);
      render(<DynamicLayout page={<PageMock />} />);

      const [layout] = await screen.findAllByTestId("layout");
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
