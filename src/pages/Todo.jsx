import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TodoStore } from "../store/index.jsx";
import "./Todo.css";

const Todo = () => {
  const { todos, setTodos } = useContext(TodoStore);
  const [input, setInput] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [newInput, setNewInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: Date.now(), name: input, isCheckCompleted: false },
    ]);
    setInput("");
    console.log("form submitted");
  };

  const handleDelete = (clickedIndex) => {
    setTodos(todos.filter((_todo, index) => clickedIndex !== index));
  };

  const handleUpdateTodo = (clickedIndex) => {
    setTodos(
      todos.map((todo, index) =>
        clickedIndex === index ? { ...todo, name: newInput } : todo
      )
    );
    setEditIndex(null);
  };

  const handleDone = (clickedIndex) => {
    setTodos(
      todos.map((todo, index) =>
        clickedIndex === index
          ? { ...todo, isCheckCompleted: !todo.isCheckCompleted }
          : todo
      )
    );
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
          <button>Add</button>
        </form>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)}
                  />
                ) : (
                  <div
                    className={`todo-checkbox ${
                      todo.isCheckCompleted ? "done" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.isCheckCompleted}
                      onChange={() => handleDone(index)}
                    />
                    <p>{todo.name}</p>
                  </div>
                )}
                <div>
                  {editIndex === index ? (
                    <button onClick={() => handleUpdateTodo(index)}>
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setNewInput(todo.name);
                      }}
                    >
                      Edit
                    </button>
                  )}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
