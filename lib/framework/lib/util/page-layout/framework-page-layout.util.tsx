import { AppPropsWithLayout, Layout } from "../../entity/page-layout/framework-page-layout.entity";

export const NoLayout: Layout = ({ page }) => {
   return <>{page}</>;
};

export function getLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? NoLayout;
}
