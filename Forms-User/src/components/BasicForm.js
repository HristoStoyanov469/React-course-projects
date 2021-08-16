import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(x => x.trim() !== '');

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(x => x.trim() !== '');

  const {
    value: emailValue,
    isValid: emaiIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(x => x.includes('@'));


  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emaiIsValid) {
    formIsValid = true;
  }


  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstNameValue, lastNameValue);

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const fnNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lnNameclasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailclasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={fnNameClasses}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} />
        </div>
        {firstNameHasError && <p>Please enter a first name</p>}

        <div className={lnNameclasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
        </div>
        {lastNameHasError && <p>Please enter a last name</p>}

      </div>
      <div className={emailclasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
      </div>
      {emailHasError && <p>Please enter a valid email</p>}

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
