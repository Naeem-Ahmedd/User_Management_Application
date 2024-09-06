import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="back">
      <h1>Add User</h1>
      <Link to="/">
        <h1>
          <IoArrowBackCircle />
        </h1>
      </Link>
    </div>
  );
};

export default Back;
