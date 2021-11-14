import { PageWithLayout, DefaultLayout } from "$shared/layout";

const IndexPage: PageWithLayout = () => {
   return (
      <div>
         <h1 className="text-neutral-800">Index page</h1>
         <pre>
            <code className="text-blue-500">{`console.log("1234")`}</code>
         </pre>
      </div>
   );
};

IndexPage.layout = DefaultLayout;

export default IndexPage;
