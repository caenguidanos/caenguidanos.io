import type { NextPage } from "next";
import type { Layout } from "./framework-client-layout-entity-layout";

export type PageWithLayout<K = unknown> = NextPage<K> & {
   layout?: Layout;
};
