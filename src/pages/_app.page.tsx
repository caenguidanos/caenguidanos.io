import Script from "next/script";
import { RecoilRoot } from "recoil";

import { getLayout, AppPropsWithLayout } from "$lib/client/shared/ui";

import "$config/msw";

import "$lib/client/shared/styles/lib/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const dynamicLayout = getLayout(Component);

   return dynamicLayout({
      page: (
         <RecoilRoot>
            <Script src="https://unpkg.com/spacingjs" strategy="lazyOnload" />

            <Component {...pageProps} />
         </RecoilRoot>
      )
   });
}

export default MyApp;
