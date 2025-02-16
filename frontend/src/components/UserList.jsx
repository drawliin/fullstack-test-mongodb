// frontend/src/components/UserList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const port = process.env.PORT || 4002;
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:${port}/api/users`);
      setUsers(res.data);
    };
    fetchUsers();
  }, [users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:${port}/api/users`, newUser);
    setUsers([...users, res.data]);
    setNewUser({ name: "", email: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:${port}/api/users/${id}`);
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div>
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email})
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
