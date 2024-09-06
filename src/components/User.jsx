import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../store/store";
import { useContext } from "react";

const User = ({ user }) => {
  const { handleEditUser, handleDeleteUser } = useContext(UserContext);
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td className="action">
        <button onClick={() => handleEditUser(user)}>
          <MdEdit color="green" />
        </button>
        <button onClick={() => handleDeleteUser(user)}>
          <MdDelete color="red" />
        </button>
      </td>
    </tr>
  );
};

export default User;
