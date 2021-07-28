import React from "react";

import SimpleName from "./../components/SimpleName";
import Counter from "./../components/Counter";
import BookList from "./../components/BookList";
import Book from "./../components/Book";
import BookFormBuildInValidation from "./../components/BookFormBuildInValidation";
import AuthorFormWithOwnValidation from "./../components/AuthorFormWithOwnValidation";

function Playground() {
  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
      <BookList
        books={[
          { title: "My first book", price: 11.11 },
          { title: "My second book", price: 22.22 },
        ]}
        onItemClick={(book) => alert(book.price)}
      />
      <Book />
      <BookFormBuildInValidation
        onSubmit={(book) => console.log(book)}
        book={{ title: "this is the initial book title" }}
        title="Edit book"
      />
      <AuthorFormWithOwnValidation onSubmit={(data) => console.log(data)} />
    </>
  );
}

export default Playground;
