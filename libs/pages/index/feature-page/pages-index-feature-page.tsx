import { Color } from "$libs/ui/shared";
import { Button } from "$libs/ui/button";
import { PageWithLayout } from "$libs/framework/client-layout";

import type { IndexPageProps } from "../entity-page/pages-index-entity-page";

export const IndexPage: PageWithLayout<IndexPageProps> = () => {
   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <Button id="indexPageApiFetchButton" color={Color.Primary}>
            LogIn
         </Button>
      </div>
   );
};
