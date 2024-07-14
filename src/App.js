import './App.css';
import { IoSunnyOutline } from "react-icons/io5";

function App() {
  return (
    <div class="App-container">
      <div className="App-todo">
        <header className="App-header">
          <IoSunnyOutline class="todo-mode" />
          <ul class="todo-filtered">
            <li class="active"><a href="#">All</a></li>
            <li><a href="#">Active</a></li>
            <li><a href="#">Completed</a></li>                        
          </ul>
        </header>
      </div>
    </div>
  );
}

export default App;
