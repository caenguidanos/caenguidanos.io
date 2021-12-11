import { Button } from "$lib/client/shared/ui";
import { PageWithLayout } from "$lib/client/shared/next";

import type { IndexPageProps } from "../entity/client-pages-index.entity";

const IndexPage: PageWithLayout<IndexPageProps> = () => {
   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <Button id="indexPageApiFetchButton" color="primary">
            LogIn
         </Button>
      </div>
   );
};

export default IndexPage;
