import styles from './UserButton.module.css';

const UserButton = (props) => {
  return <button type="submit">{props.name}</button>;
};

export default UserButton;
