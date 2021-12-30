import { Fragment, useState, useRef } from 'react';

import UserInput from '../UserInput/UserInput';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

import styles from './UserForm.module.css';

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (!isValidInput(username, age)) {
      return;
    }

    props.onAddUser({ username, age });

    // reset the input fields
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const isValidInput = (username, age) => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return false;
    }

    if (isNaN(Number(age))) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (must be a number).',
      });
      return false;
    }

    if (Number(age) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (must be at least 1).',
      });
      return false;
    }

    return true;
  };

  const handleResetError = () => {
    setError();
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={handleResetError}
        />
      )}
      <form className={styles.container} onSubmit={handleSubmit}>
        <UserInput label="Username" innerRef={nameInputRef} />
        <UserInput label="Age (Years)" innerRef={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Fragment>
  );
};

export default UserForm;
