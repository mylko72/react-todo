import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <div className="App-container">
      <div className="App-todo">
        <TodoHeader />
        <TodoLists />
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
