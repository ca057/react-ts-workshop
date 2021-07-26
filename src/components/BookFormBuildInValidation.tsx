import { useState, FormEvent, ChangeEvent } from "react";

import { Book } from "../domain/types";
import "./BookFormBuildInValidation.css";

const BookFormBuildInValidation: React.FC = () => {
  const [book, setBook] = useState<Book>({ title: "", isbn: "" });

  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(book);
  };

  const getChangeHandler =
    <K extends keyof Book>(key: K) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setBook((b) => ({ ...b, [key]: event.target.value }));
    };

  return (
    <form onSubmit={sendForm}>
      <fieldset>
        <legend>Book form with build-in validation</legend>
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
          />
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default BookFormBuildInValidation;
