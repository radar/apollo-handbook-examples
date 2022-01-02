import { Form, Field, FieldRenderProps } from "react-final-form";

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

type BookFormProps = {
  onSubmit: (values: any) => void;
}

const BookForm = ({ onSubmit }: BookFormProps) => {
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

            <input className="submit" type="submit" value="Create Book" disabled={hasValidationErrors} />
          </form>
        );
      }}
    />
  );
}

export default BookForm;
