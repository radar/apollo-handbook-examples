import Form from "./Form";
import { gql } from "@apollo/client";
import { useCreateBookMutation } from "src/generated/graphql";

const createBookQuery = gql`
  mutation createBook($title: String!) {
    createBook(title: $title) {
      id
      title
    }
  }
`;

function CreateForm() {
  const [createBookMut, { data, called, loading, error }] = useCreateBookMutation();
  const createBook = ({ title }: { title: string }) => {
    createBookMut({
      variables: { title },
    });
  };

  return (
    <>
      <Form onSubmit={createBook} />
      {called && !loading && !error && (
        <div className="text-green-500 mt-4">Book created successfully!</div>
      )}
    </>
  );
}

export default CreateForm;
