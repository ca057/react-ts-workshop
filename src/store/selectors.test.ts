import { RootState } from ".";
import { Book } from "../domain/types";
import { getAllBooks } from "./selectors";

describe("store/selectors", () => {
  describe("getAllBooks", () => {
    it("should return the list of books from the store", () => {
      const books: Book[] = [{ title: "my test book" }];
      const state = { books: { books } } as RootState;

      expect(getAllBooks(state)).toEqual(books);
    });
  });
});
