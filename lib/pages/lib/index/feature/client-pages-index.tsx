import { Button, Color } from "$lib/ui";
import { PageWithLayout } from "$lib/framework";

import type { IndexPageProps } from "../entity/client-pages-index.entity";

const IndexPage: PageWithLayout<IndexPageProps> = () => {
   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <Button id="indexPageApiFetchButton" color={Color.Primary}>
            LogIn
         </Button>
      </div>
   );
};

export default IndexPage;
