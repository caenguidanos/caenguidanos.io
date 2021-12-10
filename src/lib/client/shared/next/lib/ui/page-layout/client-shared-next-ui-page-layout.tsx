import { Layout } from "../../entity/page-layout/client-shared-next-page-layout.entity";

export const DefaultLayout: Layout = ({ page }) => {
   return <main data-testid="__layout__">{page}</main>;
};
