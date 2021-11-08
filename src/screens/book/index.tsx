import { useEffect, useState } from "react";
import { Link, Route, useHistory, useRouteMatch } from "react-router-dom";

import BookDisplay from "../../components/Book";
import EditBook from "../../components/EditBook";
import { Book as BookI } from "../../domain/types";

const Book: React.FC = () => {
  const {
    params: { isbn },
    url,
    path,
  } = useRouteMatch<{ isbn: string }>();
  const { goBack } = useHistory();
  const [book, setBook] = useState<BookI | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookFromApi = await response.json();
      setBook(bookFromApi);
    }
    fetchBook();
  }, [isbn]);

  if (book === null) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (book: BookI) => {
    console.log(book);
    goBack();
  };

  return (
    <>
      <Route exact path={path}>
        <BookDisplay book={book} />
        <Link to={`${url}/edit`}>Edit</Link>
      </Route>
      <Route exact path={`${path}/edit`}>
        <EditBook book={book} onSubmit={handleSubmit} />
        <Link to={url}>Cancel and go back</Link>
      </Route>
    </>
  );
};

export default Book;
