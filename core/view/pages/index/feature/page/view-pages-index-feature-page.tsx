import { PageWithLayout } from "$caenguidanos.io/framework";
import { Button, ThemeColor } from "$caenguidanos.io/simple-ui";

import { UsersRepository } from "../../data-access/users/view-pages-index-data-access-users";
import { IndexPageProps } from "../../entity/page/view-pages-index-entity-page";

const usersRepository = new UsersRepository();

export const IndexPage: PageWithLayout<IndexPageProps> = () => {
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
