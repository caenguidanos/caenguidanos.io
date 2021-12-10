import { Button } from "$lib/client/shared/ui";
import { PageWithLayout } from "$lib/client/shared/next";
import { useStateMachine } from "$lib/client/shared/global-state";

import type { IndexPageProps } from "../entity/client-pages-index.entity";

const Navbar = () => {
   const [state] = useStateMachine("auth");

   return (
      <pre className="text-blue-500">
         <code>From Navbar:</code>
         <code>{JSON.stringify(state.context, null, 4)}</code>
      </pre>
   );
};

const IndexPage: PageWithLayout<IndexPageProps> = () => {
   const [state, send] = useStateMachine("auth");

   return (
      <div className="grid gap-10 max-w-7xl m-20">
         <Navbar />
         <pre className="text-red-500">
            <code>From Index Page:</code>
            <code>{JSON.stringify(state.context, null, 4)}</code>
         </pre>
         <Button
            id="indexPageApiFetchButton"
            onClick={() =>
               send({
                  type: "LOGIN",
                  payload: {
                     user: "caenguidanos@github.com"
                  }
               })
            }
            color="primary"
         >
            LogIn
         </Button>

         <Button
            id="indexPageApiFetchButton"
            onClick={() => send("LOGOUT")}
            color="primary"
         >
            LogOut
         </Button>
      </div>
   );
};

export default IndexPage;
