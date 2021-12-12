import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

export type Layout = React.FunctionComponent<{ page: ReactElement }>;

export type AppPropsWithLayout = AppProps & {
   Component: PageWithLayout;
};

export type PageWithLayout<K = unknown> = NextPage<K> & {
   layout?: Layout;
};
