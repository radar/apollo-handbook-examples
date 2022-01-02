import client from "client";
import { ApolloProvider } from "@apollo/client";
import Books from "components/Books";

function App() {
  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  );
}

export default App;
