import fs from "fs";

import { resolve } from "$lib/server/shared/io";
import { transformToHtml } from "src/lib/server/markdown";

import { IndexPage } from "$lib/client/pages";

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
