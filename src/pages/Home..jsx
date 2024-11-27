import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/todo">Todo</Link>
      <h1> Todo 10 taska</h1>
      <h3>05 pending tasks</h3>
      <h5>05 completed tasks</h5>
    </div>
  );
};

export default Home;
