import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);

      return initialProps;
   }

   render() {
      return (
         <Html lang="es">
            <Head>
               <link
                  rel="preload"
                  href="/static/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"
                  as="font"
                  type="font/woff2"
                  crossOrigin="anonymous"
               />

               <link href="/static/favicons/favicon.ico" rel="shortcut icon" />

               <meta content="#ffffff" name="theme-color" />
               <meta content="#ffffff" name="msapplication-TileColor" />
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
