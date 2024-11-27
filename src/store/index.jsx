import { createContext } from "react";

export const TodoStore = createContext(null);

const StoreProvider = ({ children }) => {
  const name = "Himani";
  const email = "hg@gmail.com";
  return (
    <TodoStore.Provider value={{ name, email }}>{children}</TodoStore.Provider>
  );
};

export default StoreProvider;
