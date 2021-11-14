import { PageWithLayout, DefaultLayout } from "$shared/layout";

const IndexPage: PageWithLayout = () => {
   return <h1>Index page</h1>;
};

IndexPage.layout = DefaultLayout;

export default IndexPage;
