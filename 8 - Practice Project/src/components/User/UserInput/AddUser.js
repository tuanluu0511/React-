import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const nameInputChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageInputChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const inputData = {
      name: inputName,
      age: inputAge,
      id: Math.random().toString(),
    };

    props.onAddUser(inputData);
    setInputName('');
    setInputAge('');
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input value={inputName} type="text" onChange={nameInputChangeHandler} />
        <label>Age (Years)</label>
        <input value={inputAge} type="text" onChange={ageInputChangeHandler} />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
