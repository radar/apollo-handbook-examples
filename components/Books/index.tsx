import { gql } from "graphql-tag";
import {
  useAllBooksWithTitleLazyQuery,
  AllBooksWithTitleQuery,
} from "src/generated/graphql";
import { useDebouncedCallback } from "use-debounce";

const allBooksWithTitleQuery = gql`
  query allBooksWithTitle($title: String!) {
    books: booksWithTitle(title: $title) {
      id
      title
    }
  }
`;

function Books({ books }: { books: AllBooksWithTitleQuery["books"] }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

function WrappedBooks() {
  const [loadBooks, { loading, error, data }] = useAllBooksWithTitleLazyQuery();

  const _findBook = (title: string) => {
    loadBooks({ variables: { title } });
  };

  const findBook = useDebouncedCallback(_findBook, 250);

  const renderResults = () => {
    if (loading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Something went wrong: ${error}</span>;
    }

    return data && <Books books={data.books} />
  }

  return (
    <div>
      <h1>Books</h1>
      <input
        className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        placeholder="Search..."
        type="text"
        onChange={(e) => findBook(e.target.value)}
      />
      {renderResults()}
    </div>
  );
}

export default WrappedBooks;
