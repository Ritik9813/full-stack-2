import React, { useState, useEffect } from "react";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> - {user.email}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Users;