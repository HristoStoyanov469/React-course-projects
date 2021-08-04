import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [userList, setUserList] = useState([]);
  function UserHandler(uName, uAge) {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={UserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
