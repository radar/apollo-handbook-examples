import { ApolloProvider } from "@apollo/client";
import client from "client";
import CreateBookForm from "components/Books/CreateForm";

function NewBook() {
  return (
    <ApolloProvider client={client}>
      <h1>Create a book</h1>
      <CreateBookForm />
    </ApolloProvider>
  );
}

export default NewBook;
