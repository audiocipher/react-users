import { useState } from 'react';

import UserForm from '../UserForm/UserForm';
import UserList from '../UserList/UserList';

import Card from '../UI/Card/Card';

import styles from './UserApp.module.css';

const INITIAL_USERS = [
  { id: '0', username: 'Sam', age: 22 },
  { id: '1', username: 'Max', age: 31 },
];

const UserApp = () => {
  const [users, setUsers] = useState(INITIAL_USERS);

  // user is an object with properties username and age
  const handleAddUser = (user) => {
    setUsers((prevState) => {
      const id = Math.random().toString(); // use a UUID instead
      return [...prevState, { id, ...user }];
    });
  };

  return (
    <div className={styles.container}>
      <Card>
        <UserForm onAddUser={handleAddUser} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
};

export default UserApp;
