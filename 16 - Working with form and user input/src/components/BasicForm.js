import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== '';
  const isEmail = (value) => value.includes('@');

  const { value: nameValue, isValid: nameIsValid, hasError: nameHasError, inputBlurHandler: nameBlurHandler, inputValueHandler: nameValueHandler, reset: nameReset } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    inputValueHandler: lastNameValueHandler,
    reset: lastNameReset,
  } = useInput(isNotEmpty);

  const { value: emailValue, isValid: emailIsValid, hasError: emailHasError, inputBlurHandler: emailBlurHandler, inputValueHandler: emailValueHandler, reset: emailReset } = useInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  }
  const submissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameReset();
    emailReset();
    lastNameReset();
  };

  const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submissionHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={nameValue} onChange={nameValueHandler} onBlur={nameBlurHandler} />
          {nameHasError && <p className="error-text">This field cannot not empty.</p>}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lastNameValue} onChange={lastNameValueHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text">This field cannot not empty.</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="email" value={emailValue} onChange={emailValueHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Invalid Email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
