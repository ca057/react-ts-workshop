import { renderHook } from "@testing-library/react-hooks";
import { useBook } from "./book";

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

  test("should return null when nothing is loaded", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useBook(isbn));

    expect(result.current).toBe(null);

    // prevent warnings on the test console
    await waitForNextUpdate();
  });

  test("should call the API with the passed isbn", async () => {
    const { waitForNextUpdate } = renderHook(() => useBook(isbn));

    await waitForNextUpdate();

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(isbn));
  });

  test("should return the book from the API response", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => book } as unknown as Response)
    );
    const { result, waitForNextUpdate } = renderHook(() => useBook(isbn));

    await waitForNextUpdate();

    expect(result.current).toEqual(book);
  });

  test("should rerun the API call if rerendered with a new ISBN", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => ({}) } as unknown as Response)
    );
    const { rerender, waitForNextUpdate } = renderHook(() => useBook(isbn));

    await waitForNextUpdate();
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(isbn));

    const newIsbn = "new-isbn";
    rerender(newIsbn);

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(isbn));
  });
});
