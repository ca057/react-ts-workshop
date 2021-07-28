import { useParams } from "react-router-dom";

const Book: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();
  return <p>ISBN: {isbn}</p>;
};

export default Book;
