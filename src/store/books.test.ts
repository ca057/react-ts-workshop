import booksReducer, { addBooks } from "./books";

describe("store/books", () => {
  it("should handle addBooks action", () => {
    const books = [{ title: "my test book" }];
    const action = addBooks(books);

    expect(booksReducer(undefined, action)).toEqual({ books });
  });
});
