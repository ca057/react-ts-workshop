import React from "react";

interface AuthorFormWithOwnValidationProps {
  onSubmit: (data: string) => void
}

const AuthorFormWithOwnValidation: React.FC<AuthorFormWithOwnValidationProps> = ({
  onSubmit
}) => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [touched, setTouched] = React.useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);

    if (!value.match(/.+@.+/)) {
      setEmailError(
        "Email needs to include an “@” and one character before and after."
      );
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email);
    setEmail("");
    setEmailError("");
    setTouched(false);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        onFocus={() => setTouched(true)}
      />
      {!emailError && !email && !touched && (
        <p className="hint">Please enter an email.</p>
      )}
      {emailError && <p className="error">{emailError}</p>}
      {!emailError && !email && touched && (
        <p className="error">No email given</p>
      )}
      {email && touched && !emailError && (
        <p className="success">Thank you for your email!</p>
      )}
      <button disabled={!email || !!emailError}>Submit</button>
    </form>
  );
};

export default AuthorFormWithOwnValidation;
