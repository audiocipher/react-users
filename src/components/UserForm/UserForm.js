import { useState } from 'react';

import UserInput from '../UserInput/UserInput';
import UserButton from '../UserButton/UserButton';

import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onAddUser({ username, age });

    resetFields();
  };

  const resetFields = () => {
    setUsername('');
    setAge('');
  };

  return (
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
      <UserButton name="Add User" />
    </form>
  );
};

export default UserForm;
