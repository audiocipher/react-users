import styles from './UserInput.module.css';

const UserInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" value={props.value} onChange={props.onUpdateValue} />
    </div>
  );
};

export default UserInput;
