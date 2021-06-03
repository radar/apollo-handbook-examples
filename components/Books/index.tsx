import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

const allBooksQuery = gql`
  query allBooks {
    books {
      title
    }
  }
`;

export type Book = {
  id: string;
  title: string;
};

function Books({ books }: { books: Book[] }) {
  return (
    <ul>
      {books.map((book, idx) => (
        <li key={idx}>{book.title}</li>
      ))}
    </ul>
  );
}

type AllBooksQuery = {
  books: Book[];
};

function WrappedBooks() {
  const { loading, error, data } = useQuery<AllBooksQuery>(allBooksQuery);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong: ${error}</span>;
  }

  if (data) {
    return (
      <div>
        <h1>Books</h1>
        <Books books={data.books} />
      </div>
    );
  }

  return null;
}

export default WrappedBooks;
