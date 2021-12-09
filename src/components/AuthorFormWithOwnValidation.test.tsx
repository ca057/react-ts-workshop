import { fireEvent, render } from "@testing-library/react";

import AuthorFormWithOwnValidation from "./AuthorFormWithOwnValidation";

describe("components/AuthorFormWithOwnValidation", () => {
  test("renders the input for the email", () => {
    const { getByPlaceholderText } = render(
      <AuthorFormWithOwnValidation onSubmit={jest.fn()} />
    );

    expect(getByPlaceholderText(/email/i)).toBeTruthy();
  });

  test("renders an initial hint to enter an email", () => {
    const { getByText } = render(
      <AuthorFormWithOwnValidation onSubmit={jest.fn()} />
    );

    expect(getByText(/please enter an email/i)).toBeTruthy();
  });

  test("renders a descriptive error when there is an invalid email entered", () => {
    const { getByText, getByPlaceholderText } = render(
      <AuthorFormWithOwnValidation onSubmit={jest.fn()} />
    );

    fireEvent.change(getByPlaceholderText(/email/i), {
      target: { value: "a" },
    });

    expect(getByText(/email needs to include an .@./i)).toBeTruthy();
  });

  test("renders a descriptive error when there is no email entered but the form is touched", () => {
    const { getByText, getByPlaceholderText } = render(
      <AuthorFormWithOwnValidation onSubmit={jest.fn()} />
    );

    const emailInput = getByPlaceholderText(/email/i);
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, {
      target: { value: "" },
    });

    expect(getByText(/no email given/i)).toBeTruthy();
  });

  test("renders a grateful message when a valid email is entered", () => {
    const { getByText, getByPlaceholderText } = render(
      <AuthorFormWithOwnValidation onSubmit={jest.fn()} />
    );

    const emailInput = getByPlaceholderText(/email/i);
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, {
      target: { value: "abc@def.gh" },
    });

    expect(getByText(/thank you/i)).toBeTruthy();
  });

  test("calls the submit handler with the email when form is submitted", () => {
    const mockOnSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <AuthorFormWithOwnValidation onSubmit={mockOnSubmit} />
    );

    const email = "abc@def.gh";
    const emailInput = getByPlaceholderText(/email/i);
    fireEvent.focus(emailInput);
    fireEvent.change(emailInput, {
      target: { value: email },
    });
    fireEvent.click(getByText(/submit/i));

    expect(mockOnSubmit).toHaveBeenCalledWith(email);
  });

  test("reset the form when it is submitted", () => {
    const mockOnSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <AuthorFormWithOwnValidation onSubmit={mockOnSubmit} />
    );

    const emailInput = getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, {
      target: { value: "abc@def.gh" },
    });
    fireEvent.click(getByText(/submit/i));

    expect(emailInput.textContent).toBe("");
  });
});
