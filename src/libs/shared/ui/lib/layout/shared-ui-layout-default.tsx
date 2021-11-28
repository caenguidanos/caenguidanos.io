import { Layout } from "./shared-ui-layout.entity";

export const DefaultLayout: Layout = ({ page }) => {
   return <main data-testid="__layout__">{page}</main>;
};
