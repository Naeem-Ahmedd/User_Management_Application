import { createContext } from "react";

export const UserContext = createContext({
  users: [],
  showForm: false,
  selectedUser: null,
  handleCreateUser: () => {},
  handleEditUser: () => {},
  handleDeleteUser: () => {},
  handleSubmit: () => {},
});
