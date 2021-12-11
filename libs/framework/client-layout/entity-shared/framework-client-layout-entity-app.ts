import type { AppProps } from "next/app";
import type { PageWithLayout } from "./framework-client-layout-entity-page-with-layout";

export type AppPropsWithLayout = AppProps & {
   Component: PageWithLayout;
};
