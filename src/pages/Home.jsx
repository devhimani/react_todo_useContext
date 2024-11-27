import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoStore } from "../store/index.jsx";

const Home = () => {
  const { name, email } = useContext(TodoStore);
  console.log(name, email);
  return (
    <div>
      <Link to="/todo">Todo</Link>
      <div>
        <h1> Todo 10 taska</h1>
        <h3>05 pending tasks</h3>
        <h5>05 completed tasks</h5>
      </div>
    </div>
  );
};

export default Home;
