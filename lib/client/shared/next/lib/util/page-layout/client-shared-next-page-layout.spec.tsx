/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import { PageWithLayout } from "../../entity/page-layout/client-shared-next-page-layout.entity";
import { DefaultLayout } from "../../ui/page-layout/client-shared-next-ui-page-layout";
import { getLayout } from "./client-shared-next-page-layout.util";

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
