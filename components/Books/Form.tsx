import { Form, Field, FieldRenderProps } from "react-final-form";
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

const required = (value: string) =>
  value ? undefined : "This field is required";

const TextInput = ({ input, meta }: FieldRenderProps<string>) => {
  const hasError = meta.error && meta.touched;
  return (
    <div>
      <input
        type="text"
        className={`text-field ${hasError && "has-error"}`}
        {...input}
      />
      {hasError && <span className="text-red-500">{meta.error}</span>}
    </div>
  );
};

type BookFormParams = Record<"title", string>;
type BookFormProps = {
  onSubmit: (values: BookFormParams) => void;
};

function BookForm({ onSubmit }: BookFormProps) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, hasValidationErrors }) => {
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Title
              <Field name="title" component={TextInput} validate={required} />
            </label>

            <input
              disabled={hasValidationErrors}
              className="submit"
              type="submit"
              value="Create Book"
            />
          </form>
        );
      }}
    />
  );
}

function WrappedBookForm() {
  const [createBookMut, { called, error, loading }] = useCreateBookMutation();
  const createBook = ({ title }: BookFormParams) => {
    createBookMut({
      variables: { title },
    });
  };

  return (
    <div>
      <BookForm onSubmit={createBook} />
      {called && !loading && !error && (
        <div className="text-green-500 mt-4">Book created successfully!</div>
      )}
    </div>
  );
}

export default WrappedBookForm;
