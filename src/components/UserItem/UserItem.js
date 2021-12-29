import styles from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={styles.container}>
      <p>{`${props.username} (${props.age} years old)`}</p>
    </li>
  );
};

export default UserItem;
