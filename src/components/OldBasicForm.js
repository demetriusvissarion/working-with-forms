import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [firstNameIsTouched, setFirstnameIsTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState("");
  const [lastNameIsTouched, setLastnameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  // Form Validation
  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameInputIsInvalid =
    !enteredFirstNameIsValid && firstNameIsTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const lastNameInputIsInvalid = !enteredLastNameIsValid && lastNameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && emailIsTouched;

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  // Change Handlers
  const firstNameChangeHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e) => {
    setEnteredLastName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // Blur Handlers
  const firstNameBlurChangeHandler = (e) => {
    setFirstnameIsTouched(true);
  };
  const lastNameBlurChangeHandler = (e) => {
    setLastnameIsTouched(true);
  };
  const emailBlurChangeHandler = (e) => {
    setEmailIsTouched(true);
  };

  // Submission Handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredFirstName || !enteredLastName || !enteredEmail) {
      return;
    }
    setEnteredFirstName("");
    setFirstnameIsTouched(false);
    setEnteredLastName("");
    setLastnameIsTouched(false);
    setEnteredEmail("");
    setEmailIsTouched(false);
  };

  // Error style classes
  const firstNameInputClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurChangeHandler}
            value={enteredFirstName}
          />
          {firstNameInputIsInvalid && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurChangeHandler}
            value={enteredLastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
