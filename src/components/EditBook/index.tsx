import { useState, FormEvent, ChangeEvent } from "react";

import { Book } from "../../domain/types";
import "../BookFormBuildInValidation/BookFormBuildInValidation.css";

const defaultBook: Book = {
  title: "",
  isbn: "",
};

interface EditBookProps {
  book: Book;
  onSubmit: (book: Book) => void;
  title?: string;
}
const EditBook: React.VFC<EditBookProps> = ({
  book: initalBook,
  title = "Edit Book",
  onSubmit,
}) => {
  const [book, setBook] = useState<Book>({ ...defaultBook, ...initalBook });

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(book);
  };

  const getChangeHandler =
    <K extends keyof Book>(key: K) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setBook((b) => ({ ...b, [key]: event.target.value }));
    };

  return (
    <form onSubmit={handleOnSubmit}>
      <fieldset>
        <legend>{title}</legend>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="Title"
            placeholder="Title"
            id="title"
            value={book.title}
            required
            onChange={getChangeHandler("title")}
          />
        </div>
        <div>
          <label htmlFor="isbn">Isbn: </label>
          <input
            type="text"
            name="Isbn"
            id="isbn"
            value={book.isbn}
            required
            onChange={getChangeHandler("isbn")}
            pattern="((?:[\dX]{13})|(?:[\d\-X]{17})|(?:[\dX]{10})|(?:[\d\-X]{13}))" // taken from https://regexr.com/38pq9
          />
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default EditBook;
