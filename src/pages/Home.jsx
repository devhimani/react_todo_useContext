import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoStore } from "../store/index.jsx";

const Home = () => {
  const { todos } = useContext(TodoStore);

  return (
    <div>
      <Link to="/todo">Todo</Link>
      <div>
        <h1> Totoal {todos.length} tasks</h1>
        <h3>05 pending tasks</h3>
        <h4>05 completed tasks</h4>
      </div>
    </div>
  );
};

export default Home;
