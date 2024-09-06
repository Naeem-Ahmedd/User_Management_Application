import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./store/store";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data.slice(0, 7));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleCreateUser = () => {
    setShowForm(true);
    setSelectedUser(null);
    navigate("/form");
  };

  const handleEditUser = (user) => {
    setShowForm(true);
    setSelectedUser(user);
    navigate("/form");
  };

  const handleDeleteUser = async (user) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${user.id}`
      );
      setUsers(users.filter((u) => u.id !== user.id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (user) => {
    if (selectedUser) {
      try {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${selectedUser.id}`,
          user
        );
        setUsers(
          users.map((u) => (u.id === selectedUser.id ? response.data : u))
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          user
        );
        setUsers([...users, response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    setShowForm(false);
    setSelectedUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        showForm,
        selectedUser,
        handleCreateUser,
        handleEditUser,
        handleDeleteUser,
        handleSubmit,
      }}
    >
      <div className="container">
        <div className="app">{loading ? <LoadingSpinner /> : <Outlet />}</div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
