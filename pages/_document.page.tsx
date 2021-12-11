import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { getCssText } from "$stitches";

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }

   render() {
      return (
         <Html lang="es">
            <Head>
               <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

               <link
                  rel="preload"
                  href="/static/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />

               <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
            </Head>
            <body className="bg-white text-white">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
