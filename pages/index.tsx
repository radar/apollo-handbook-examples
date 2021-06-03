import client from "client";
import { ApolloProvider } from "@apollo/client";
import Layout from "components/Layout";
import Books from "components/Books";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Books />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
