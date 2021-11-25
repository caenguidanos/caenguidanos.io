import fs from "fs";

import { resolve } from "$shared/io";
import { transformToHtml } from "$shared/markdown";

import IndexPage from "$pages/index";

import type { GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticProps: GetStaticProps = async (_ctx: GetStaticPropsContext) => {
   const blogPostSource = fs.readFileSync(
      resolve("public", "static", "documents", "blog", "programing", "hello_ES.md"),
      "utf8"
   );

   return {
      props: {
         html: await transformToHtml({ input: blogPostSource })
      }
   };
};

export default IndexPage;
