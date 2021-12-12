import { GetStaticProps, GetStaticPropsContext } from "next";

import { IndexPage } from "$caenguidanos.io/pages/index";

export const getStaticProps: GetStaticProps = async (_ctx: GetStaticPropsContext) => {
   return {
      props: {
         html: `<h1>Hello</h1>`
      }
   };
};

export default IndexPage;
