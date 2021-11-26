import { AppPropsWithLayout, Layout } from "../../entity/shared-layout.entity";

export const NoLayout: Layout = ({ page }) => {
   return <>{page}</>;
};

export function getLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? NoLayout;
}
