import { Layout } from "../../entity/page-layout/framework-page-layout.entity";

export const DefaultLayout: Layout = ({ page }) => {
   return <main data-testid="__layout__">{page}</main>;
};
