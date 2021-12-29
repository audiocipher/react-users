import styles from './UserInput.module.css';

const UserInput = (props) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <input type="text" value={props.value} onChange={props.onUpdateValue} />
    </div>
  );
};

export default UserInput;
