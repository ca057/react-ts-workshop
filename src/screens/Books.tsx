import BookList from "../components/BookList";

const Books: React.FC = () => {
  return (
    <BookList
      books={[
        { title: "My first book", price: 11.11 },
        { title: "My second book", price: 22.22 },
      ]}
      onItemClick={(book) => alert(book.price)}
    />
  );
};

export default Books;
