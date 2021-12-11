import { Layout } from "../entity-shared/framework-client-layout-entity-layout";

export const DefaultLayout: Layout = ({ page }) => {
   return <main data-testid="__layout__">{page}</main>;
};
