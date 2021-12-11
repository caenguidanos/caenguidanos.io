import type { AppPropsWithLayout } from "../entity-shared/framework-client-layout-entity-app";
import type { Layout } from "../entity-shared/framework-client-layout-entity-layout";

export const NoLayout: Layout = ({ page }) => {
   return <>{page}</>;
};

export function getLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? NoLayout;
}
