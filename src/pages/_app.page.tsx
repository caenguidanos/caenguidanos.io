import { getLayout, AppPropsWithLayout } from "$lib/client/shared/ui";

import "$lib/client/shared/styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const dynamicLayout = getLayout(Component);

   return dynamicLayout({ page: <Component {...pageProps} /> });
}

export default MyApp;
