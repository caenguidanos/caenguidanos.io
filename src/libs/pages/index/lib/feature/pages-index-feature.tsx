import { useState } from "react";

import { DefaultLayout, PageWithLayout } from "$shared/ui";

import type { IndexPageProps } from "../entity/pages-index-feature.entity";

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
            type="button"
            onClick={handleCallApiButtonClick}
            className="p-3 rounded bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700"
         >
            Fetch
         </button>
      </div>
   );
};

IndexPage.layout = DefaultLayout;

export default IndexPage;
