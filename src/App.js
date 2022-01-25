import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud</h2>
      <nav>
        <Link to="/create">Create</Link> | <Link to="/read">Read</Link>
      </nav>
    </div>
  );
}

export default App;
