import React, { useState } from 'react';
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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={inputUser} />
    </div>
  );
}

export default App;
