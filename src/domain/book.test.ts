import { renderHook } from "@testing-library/react-hooks";
import * as selectors from "../store/selectors";
import { Wrapper } from "../common/util/test-utils";
import { useBook } from "./book";
import { Book } from "./types";

const isbn = "test-isbn";
const book = { title: "test-book", isbn };

describe("domain/book", () => {
  let originalFetch = global.fetch;
  beforeEach(() => {
    jest.restoreAllMocks();
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => ({}) } as Response)
    );
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  describe("useBook", () => {
    describe("no book found in store", () => {
      test("should return null when nothing is loaded yet", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useBook(isbn), {
          wrapper: Wrapper,
        });

        expect(result.current).toBe(null);

        // prevent warnings on the test console
        await waitForNextUpdate();
      });

      test("should call the API with the passed isbn", async () => {
        const { waitForNextUpdate } = renderHook(() => useBook(isbn), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(global.fetch).toHaveBeenCalledWith(
          expect.stringContaining(isbn)
        );
      });

      test("should return the book from the API response", async () => {
        global.fetch = jest.fn(() =>
          Promise.resolve({ json: () => book } as unknown as Response)
        );
        const { result, waitForNextUpdate } = renderHook(() => useBook(isbn), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(result.current).toEqual(book);
      });

      test("should rerun the API call if rerendered with a new ISBN", async () => {
        global.fetch = jest.fn(() =>
          Promise.resolve({ json: () => ({}) } as unknown as Response)
        );
        const { rerender, waitForNextUpdate } = renderHook(
          // @ts-expect-error typings of library are throwing an error here
          (props) => useBook(props.isbn),
          {
            initialProps: { isbn },
            wrapper: Wrapper,
          }
        );

        await waitForNextUpdate();
        expect(global.fetch).toHaveBeenCalledWith(
          expect.stringContaining(isbn)
        );

        const newIsbn = "new-isbn";
        rerender({ isbn: newIsbn });

        await waitForNextUpdate();

        expect(global.fetch).toHaveBeenLastCalledWith(
          expect.stringContaining(newIsbn)
        );
      });
    });

    describe("book found in store", () => {
      test("should return book from store", async () => {
        const book = { title: "this is a test book", isbn };
        jest
          .spyOn(selectors, "getBookByIsbn")
          .mockImplementationOnce(() => () => book);

        const { result } = renderHook(() => useBook(isbn), {
          wrapper: Wrapper,
        });

        expect(result.current).toBe(book);
      });

      test("should return other book from store when rendered with a new isbn", async () => {
        const nextIsbn = "next-isbn";
        const books: { [key in string]: Book } = {
          [isbn]: { title: "this is a test book", isbn },
          [nextIsbn]: { title: "this is an updated test book", isbn: nextIsbn },
        };

        jest
          .spyOn(selectors, "getBookByIsbn")
          .mockImplementation((i: string) => () => books[i]);

        const { result, rerender } = renderHook(
          // @ts-expect-error typings of library are throwing an error here
          (props) => useBook(props.isbn),
          {
            wrapper: Wrapper,
            initialProps: { isbn },
          }
        );

        expect(result.current).toBe(books[isbn]);

        rerender({ isbn: nextIsbn });

        expect(result.current).toBe(books[nextIsbn]);
      });
    });
  });
});
