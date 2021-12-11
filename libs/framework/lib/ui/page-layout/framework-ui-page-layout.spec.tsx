/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { PageWithLayout } from "../../entity/page-layout/framework-page-layout.entity";
import { DefaultLayout } from "./framework-ui-page-layout";

const PageMock: PageWithLayout = () => {
   return (
      <div data-testid="page">
         <h1>Hello World!</h1>
      </div>
   );
};

describe("Client::UI::Layout::Default", () => {
   it("should render", async () => {
      render(<DefaultLayout page={<PageMock />} />);

      const [layout] = await screen.findAllByTestId("__layout__");
      const [page] = await screen.findAllByTestId("page");

      expect(layout).toBeInTheDocument();
      expect(page).toBeInTheDocument();
   });
});
