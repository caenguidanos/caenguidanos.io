import { Layout } from "../../entity/shared-layout.entity";

export const DefaultLayout: Layout = ({ page }) => {
   return <main data-testid="__layout__">{page}</main>;
};
