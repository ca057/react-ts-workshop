import { Link, Route, useHistory, useRouteMatch } from "react-router-dom";

import BookDisplay from "../../components/Book";
import EditBook from "../../components/EditBook";
import { useBook } from "../../domain/book";
import { Book as BookI } from "../../domain/types";

const Book: React.VFC = () => {
  const {
    params: { isbn },
    url,
    path,
  } = useRouteMatch<{ isbn: string }>();
  const { goBack } = useHistory();

  const book = useBook(isbn);

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
