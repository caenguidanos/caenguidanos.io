import path from "path";
import fs from "fs";

import { PageWithLayout, DefaultLayout } from "$shared/layout";
import { transformToHtml } from "$shared/markdown";

import type { GetStaticProps, GetStaticPropsContext } from "next";

interface IndexPageProps {
   html: string;
   branch: string;
}

const IndexPage: PageWithLayout<IndexPageProps> = ({ html, branch }) => {
   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <h1 className="text-neutral-800 text-7xl font-black">Blog</h1>
         <p className="text-neutral-600 text-base font-mono">{branch}</p>

         <div
            className="border rounded p-5 text-neutral-700"
            dangerouslySetInnerHTML={{ __html: html }}
         ></div>
      </div>
   );
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
   const blogSource = fs.readFileSync(
      path.resolve(process.cwd(), "data/blog/programing/hello_ES.md"),
      "utf8"
   );

   return {
      props: {
         html: await transformToHtml({ input: blogSource }),
         branch: process.env.VERCEL_GIT_COMMIT_REF || ""
      }
   };
};

IndexPage.layout = DefaultLayout;

export default IndexPage;
