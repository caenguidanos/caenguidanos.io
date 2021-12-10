import { IndexPage } from "$lib/client/pages";

import type { GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticProps: GetStaticProps = async (
   _ctx: GetStaticPropsContext
) => {
   return {
      props: {
         html: `<h1>Hello</h1>`
      }
   };
};

export default IndexPage;
