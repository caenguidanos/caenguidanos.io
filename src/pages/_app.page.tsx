import { getLayout, AppPropsWithLayout } from "$shared/layout";

import "$styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const dynamicLayout = getLayout(Component);

   return dynamicLayout({ page: <Component {...pageProps} /> });
}

export default MyApp;
