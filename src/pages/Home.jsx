import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoStore } from "../store/index.jsx";

const Home = () => {
  const { todos } = useContext(TodoStore);
  console.log(todos);
  return (
    <div>
      <Link to="/todo">Todo</Link>
      <div>
        <h1> Totoal {todos.length} tasks</h1>
        <h3>
          pending tasks {todos.filter((todo) => !todo.isCheckCompleted).length}
        </h3>
        <h4>
          completed tasks {todos.filter((todo) => todo.isCheckCompleted).length}
        </h4>
      </div>
    </div>
  );
};

export default Home;
