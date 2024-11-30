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

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  const handleUpdateTodo = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todoId === todo.id ? { ...todo, name: newInput } : todo
      )
    );
    setEditIndex(null);
  };

  const handleDone = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todoId === todo.id
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
          <h2> Pending Task</h2>
          <ul>
            {todos
              .filter((todo) => !todo.isCheckCompleted)
              .map((todo) => (
                <li key={todo.id} className="todo-item">
                  {editIndex === todo.id ? (
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
                        onChange={() => handleDone(todo.id)}
                      />
                      <p>{todo.name}</p>
                    </div>
                  )}
                  <div>
                    {editIndex === todo.id ? (
                      <button onClick={() => handleUpdateTodo(todo.id)}>
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditIndex(todo.id);
                          setNewInput(todo.name);
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <button onClick={() => handleDelete(todo.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <h2> Completed Task</h2>
          <ul>
            {todos
              .filter((todo) => todo.isCheckCompleted)
              .map((todo) => (
                <li key={todo.id} className="todo-item">
                  {editIndex === todo.id ? (
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
                        onChange={() => handleDone(todo.id)}
                      />
                      <p>{todo.name}</p>
                    </div>
                  )}
                  <div>
                    {editIndex === todo.id ? (
                      <button onClick={() => handleUpdateTodo(todo.id)}>
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditIndex(todo.id);
                          setNewInput(todo.name);
                        }}
                      >
                        Edit
                      </button>
                    )}
                    <button onClick={() => handleDelete(todo.id)}>
                      Delete
                    </button>
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
