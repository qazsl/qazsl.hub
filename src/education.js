import React from 'react';
import './education.css'

function UserList({ users }) {
  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
