import styles from './UserButton.module.css';

const UserButton = (props) => {
  return (
    <button type="submit" className={styles.button}>
      {props.name}
    </button>
  );
};

export default UserButton;
