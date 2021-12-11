import type { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type Layout = React.FunctionComponent<{ page: ReactElement }>;

export type PageWithLayout<K = unknown> = NextPage<K> & {
   layout?: Layout;
};

export type AppPropsWithLayout = AppProps & {
   Component: PageWithLayout;
};
