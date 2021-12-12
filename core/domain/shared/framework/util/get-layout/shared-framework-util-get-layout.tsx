import { AppPropsWithLayout, Layout } from "../../entity/shared-framework-entity";

const noop: Layout = ({ page }) => {
   return <>{page}</>;
};

export function getLayout(Component: AppPropsWithLayout["Component"]) {
   return Component.layout ?? noop;
}
