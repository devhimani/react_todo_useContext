import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TodoStore } from "../store/index.jsx";

const Todo = () => {
  const { todos, setTodos } = useContext(TodoStore);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <h1> Todo page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}> {todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
