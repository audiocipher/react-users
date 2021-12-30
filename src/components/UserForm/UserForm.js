import { Fragment, useState } from 'react';

import UserInput from '../UserInput/UserInput';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidInput()) {
      return;
    }

    props.onAddUser({ username, age });

    resetFields();
  };

  const isValidInput = () => {
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

  const resetFields = () => {
    setUsername('');
    setAge('');
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
        <UserInput
          label="Username"
          value={username}
          onUpdateValue={handleChangeUsername}
        />
        <UserInput
          label="Age (Years)"
          value={age}
          onUpdateValue={handleChangeAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Fragment>
  );
};

export default UserForm;
