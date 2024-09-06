import User from "./User";
import { IoIosPersonAdd } from "react-icons/io";
import { UserContext } from "../store/store";
import { useContext } from "react";

const Home = () => {
  const { users, handleCreateUser, handleEditUser, handleDeleteUser } =
    useContext(UserContext);

  return (
    <>
      <header>
        <h1>Active Users</h1>
        <button onClick={handleCreateUser} className="create">
          <IoIosPersonAdd />
        </button>
      </header>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
