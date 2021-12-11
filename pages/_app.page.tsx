import Script from "next/script";
import { RecoilRoot } from "recoil";

import { getLayout, AppPropsWithLayout } from "$lib/client/shared/next";

import "$msw";
import "$styles";

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
