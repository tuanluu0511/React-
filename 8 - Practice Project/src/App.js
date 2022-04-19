import React, { useState } from 'react';
import styles from './App.module.css';
import AddUser from './components/User/UserInput/AddUser';
import UserLists from './components/User/UserLists/UserLists';

function App() {
  const [inputUser, setInputUser] = useState([]);

  const addUserHandler = (inputData) => {
    setInputUser((prevUsers) => {
      const updatedUser = [...prevUsers];
      updatedUser.unshift(inputData);
      return updatedUser;
    });
  };

  return (
    <div className={styles.body}>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={inputUser} />
    </div>
  );
}

export default App;
