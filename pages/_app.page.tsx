import Script from "next/script";
import { RecoilRoot } from "recoil";

import "$caenguidanos.io/msw";
import "$caenguidanos.io/styles";

import { getLayout, AppPropsWithLayout } from "$caenguidanos.io/framework";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const dynamicLayout = getLayout(Component);

   return dynamicLayout({
      page: (
         <>
            <Script src="https://unpkg.com/spacingjs" strategy="lazyOnload" />

            <RecoilRoot>
               <Component {...pageProps} />
            </RecoilRoot>
         </>
      )
   });
}

export default MyApp;
