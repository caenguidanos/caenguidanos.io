import { PageWithLayout } from "$caenguidanos.io/framework";
import { Button, ThemeColor } from "$caenguidanos.io/simple-ui";

import { IndexPageProps } from "../../entity/page/view-pages-index-entity-page";
import { useUsersRepository } from "../../util/use-users-repository/view-pages-index-util-use-users-repository";

export const IndexPage: PageWithLayout<IndexPageProps> = () => {
   const usersRepository = useUsersRepository();

   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <Button
            id="indexPageApiFetchButton"
            color={ThemeColor.Primary}
            onClick={async () => {
               const data = await usersRepository.queryUserById(2, { ttl: 1000 });
               console.log(data);
            }}
         >
            ById
         </Button>

         <Button
            id="indexPageApiFetchButton"
            color={ThemeColor.Primary}
            onClick={async () => {
               const data = await usersRepository.queryUsers({ ttl: 2000 });
               console.log(data);
            }}
         >
            All
         </Button>
      </div>
   );
};
