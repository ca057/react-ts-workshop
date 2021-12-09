import { Book as BookI } from "../../domain/types";

interface BookProps {
  book: BookI;
}
const Book: React.VFC<BookProps> = ({ book }) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.subtitle}</p>
      <p>{book.numPages} pages</p>
    </div>
  );
};

export default Book;
