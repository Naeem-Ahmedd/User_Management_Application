import React, { useState } from "react";
import { UserContext } from "../store/store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Back from "./Back";

const UserForm = () => {
  const navigate = useNavigate();
  const { selectedUser, handleSubmit } = useContext(UserContext);
  const [name, setName] = useState(selectedUser ? selectedUser.name : "");
  const [email, setEmail] = useState(selectedUser ? selectedUser.email : "");
  const [phone, setPhone] = useState(selectedUser ? selectedUser.phone : "");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ name, email, phone });
    navigate("/");
  };

  return (
    <>
      <Back />
      <div className="form-container">
        <h2>User Information</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="submit-btn"
            style={{ height: "50px", fontSize: "18px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
