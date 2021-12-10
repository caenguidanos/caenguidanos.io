import {
   AppPropsWithLayout,
   Layout
} from "../../entity/page-layout/client-shared-next-page-layout.entity";

export const NoLayout: Layout = ({ page }) => {
   return <>{page}</>;
};

export function getLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? NoLayout;
}
