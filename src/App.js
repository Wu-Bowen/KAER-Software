import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from "./components/todo-list.component";
import editTodo from "./components/edit-todo.component";
import addProperty from "./components/add-property.component"

import logo from "./icon.svg"

function App() {
  return (
    <Router>
      <div className = "container">
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
          <a className = "navbar-brand" href = "https://i6.cims.nyu.edu/~ebw289/home.html" target = "_blank">
            <img src = {logo} width="30" height="30" alt="KAER_Coporations"/>
          </a>
          <Link to="/" className = "navbar-brand"> KAER Property Manager</Link>
          <div className = "collapse navbar-collapse">
            <ul className = "navbar-nav mr-auto">
              <li className = "navbar-item">
                <Link to="/" className = "nav-link"> Todos </Link>
              </li>
              <li className = "navbar-item">
                <Link to="/add" className = "nav-link"> Add Property </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path ="/" exact component = {TodosList}/>
        <Route path ="/edit/:id" component = {editTodo}/>
        <Route path ="/add" component = {addProperty}/>
      </div>

    </Router>
  );
}

export default App;
