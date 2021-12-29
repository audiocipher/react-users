import UserItem from '../UserItem/UserItem';

import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <ul className={styles.container}>
      {props.users.map((user) => {
        return (
          <UserItem key={user.id} username={user.username} age={user.age} />
        );
      })}
    </ul>
  );
};

export default UserList;
