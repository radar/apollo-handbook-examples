import { ApolloProvider } from "@apollo/client";
import client from "client";
import Layout from "components/Layout";
import BookForm from "components/Books/Form";

function NewBook() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <div>
          <h1>Create a book</h1>
          <BookForm />
        </div>
      </Layout>
    </ApolloProvider>
  );
}

export default NewBook;
