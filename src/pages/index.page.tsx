import path from "path";
import fs from "fs";

import { PageWithLayout, DefaultLayout } from "$shared/layout";
import { transformToHtml } from "$shared/markdown";

import type { GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";

export interface IndexPageProps {
   html: string;
}

const IndexPage: PageWithLayout<IndexPageProps> = ({ html }) => {
   const [apiState, setApiState] = useState<string | undefined>();

   const handleCallApiButtonClick = async (): Promise<void> => {
      const request = await fetch("/api/hello");

      if (request.ok) {
         const json = await request.json();
         setApiState(JSON.stringify(json, undefined, 3));
      }
   };

   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <h1 className="text-neutral-800 text-7xl font-black">Blog</h1>

         <div
            className="border rounded p-5 text-neutral-700"
            dangerouslySetInnerHTML={{ __html: html }}
         ></div>

         {apiState ? (
            <div id="indexPageApiStateVisualizer" className="border rounded p-5 text-neutral-700">
               {apiState}
            </div>
         ) : null}

         <button
            id="indexPageApiFetchButton"
            onClick={handleCallApiButtonClick}
            className="p-3 rounded bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700"
         >
            Fetch
         </button>
      </div>
   );
};

export const getStaticProps: GetStaticProps = async (_ctx: GetStaticPropsContext) => {
   const blogSource = fs.readFileSync(
      path.resolve(process.cwd(), "data/blog/programing/hello_ES.md"),
      "utf8"
   );

   return {
      props: {
         html: await transformToHtml({ input: blogSource })
      }
   };
};

IndexPage.layout = DefaultLayout;

export default IndexPage;
