import React from "react";
import { render, waitFor } from "@testing-library/react";

import Book from "./Book";

describe("components/Book", () => {
  let originalFetch: typeof global.fetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("shows loading info while book is not available", () => {
    const { getByText } = render(<Book />);

    expect(getByText(/loading/i)).toBeTruthy();
  });

  test("shows book when loaded", async () => {
    const book = {
      title: "book title",
      subtitle: "book subtitle",
      numPages: 123,
    };
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(book),
      })
    );
    const { getByText } = render(<Book />);

    await waitFor(() => expect(getByText(book.title)).toBeTruthy());
  });
});
