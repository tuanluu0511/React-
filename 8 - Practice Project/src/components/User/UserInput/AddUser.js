import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/Card/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const nameInputChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageInputChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please input a valid name and age (non-empty values)',
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please input a valid  age (>0)',
      });
      return;
    }

    const inputData = {
      name: inputName,
      age: inputAge,
      id: Math.random().toString(),
    };

    props.onAddUser(inputData);
    setInputName('');
    setInputAge('');
  };

  const errorHandler = () => {
    setError(null);
    setInputName('');
    setInputAge('');
  };

  return (
    <div>
      {error && <ErrorModal onCloseError={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" value={inputName} type="text" onChange={nameInputChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" value={inputAge} type="number" onChange={ageInputChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
