import { useState } from "react";

import { PageWithLayout } from "$caenguidanos.io/framework";
import { Button, ThemeColor } from "$caenguidanos.io/simple-ui";

import { useUsersRepository } from "../../data-access/users/view-pages-index-data-access-users";
import { IndexPageProps } from "../../entity/page/view-pages-index-entity-page";

export const IndexPage: PageWithLayout<IndexPageProps> = () => {
   const [state, setState] = useState<string>("");

   const usersRepository = useUsersRepository();

   const onClick = async (): Promise<void> => {
      const user = await usersRepository.usersByIdQuery(1, { ttl: 2000 });
      setState(user);
   };

   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <pre>
            <code>{state}</code>
         </pre>

         <Button id="indexPageApiFetchButton" color={ThemeColor.Primary} onClick={onClick}>
            LogIn
         </Button>
      </div>
   );
};
