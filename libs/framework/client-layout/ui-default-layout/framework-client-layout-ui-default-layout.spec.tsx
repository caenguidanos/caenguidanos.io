/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { DefaultLayout } from "./framework-client-layout-ui-default-layout";

describe("FrameworkClientLayoutUiDefaultLayout", () => {
   it("should render", async () => {
      render(
         <DefaultLayout
            page={
               <div data-testid="page">
                  <h1>Hello World!</h1>
               </div>
            }
         />
      );

      const [layout] = await screen.findAllByTestId("__layout__");
      const [page] = await screen.findAllByTestId("page");

      expect(layout).toBeInTheDocument();
      expect(page).toBeInTheDocument();
   });
});
