import { AppPropsWithLayout, Layout } from "./shared-ui-layout.entity";

export const NoLayout: Layout = ({ page }) => {
   return <>{page}</>;
};

export function getLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? NoLayout;
}
