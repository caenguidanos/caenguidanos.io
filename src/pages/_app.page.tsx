import Script from "next/script";
import { RecoilRoot } from "recoil";

import { StateMachinesRoot } from "$lib/client/shared/global-state";
import { getLayout, AppPropsWithLayout } from "$lib/client/shared/next";

import "$lib/shared/config/msw";

import "$lib/client/shared/config/xstate";
import "$lib/client/shared/styles/index.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const dynamicLayout = getLayout(Component);

   return dynamicLayout({
      page: (
         <>
            <Script src="https://unpkg.com/spacingjs" strategy="lazyOnload" />
            <RecoilRoot>
               <StateMachinesRoot>
                  <Component {...pageProps} />
               </StateMachinesRoot>
            </RecoilRoot>
         </>
      )
   });
}

export default MyApp;
