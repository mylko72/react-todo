import { useState, useEffect } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoLists from './components/TodoLists';

function App() {
  const [todos, setTodos] = useState(todoLists);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [to, setTo] = useState({index:'', name: ''});
  const [mode, setMode] = useState('');

  useEffect(() => {
    const activeTodos = todos.filter(todo => !todo.checked)
    setActiveTodos(activeTodos);

    const completedTodos = todos.filter(todo => todo.checked)
    setCompletedTodos(completedTodos);

    const allTodos = todos.map(todo => todo)
    setFilteredTodos(allTodos);

  }, [todos])

  const handleChange = (idx) => {
    const nextTodos = todos.map((todo, i) => {
      if(idx === i){
        return {
          ...todo,
          checked: !todo.checked
        }
      }
      return todo;
    });
  
    setTodos(nextTodos);
  }

  const handleAdd = (item) => {
    setTodos([
      ...todos,
      {
        name: item,
        checked: false
      }
    ])
  }

  const handleEdit = (index, item) => {
    const editTodos = todos.map((todo, i) => {
      if(index === i){
        return {
          ...todo,
          name: item
        }
      }
      return todo
    });

    setTodos(editTodos);
    setTo({index: '', name: ''});
  }

  const handleDelete = (index) => {
    const nextTodos = todos.filter((todo, i) => index !== i);
    setTodos(nextTodos);
  }

  const handleFilter = (type) => {
    if(type === 'active'){
      const activeTodos = todos.filter(todo => !todo.checked)
      setFilteredTodos(activeTodos);
    }else if(type === 'completed'){
      const completedTodos = todos.filter(todo => todo.checked)
      setFilteredTodos(completedTodos);
    }else{
      const allTodos = todos.map(todo => todo)
      setFilteredTodos(allTodos);  
    }
  }

  const handleMode = (next) => {
    mode === '' ? setMode(next) : setMode('');
  }

  return (
    <div className="App-container">
      <div className="App-todo">
        <TodoHeader
          todos={todos}
          mode={mode}
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          onFiltered={type => handleFilter(type)}
          onChangeMode={mode => handleMode(mode)}
        />
        <TodoLists 
          todos={filteredTodos}
          mode={mode}
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          onChange={idx => handleChange(idx)} 
          onSelected={(index, name) => setTo({index, name})}
          onDelete={idx => handleDelete(idx)}
        />
        <TodoFooter 
          mode={mode}
          onAdd={item => handleAdd(item)} 
          onEdit={(i, item) => handleEdit(i, item)} 
          todo={to} 
        />
      </div>
    </div>
  );
}

const todoLists = [
  {
    name: '리액트 공부하기',
    checked: false
  },
  {
    name: '청소하기',
    checked: false
  },
  {
    name: '영화보기',
    checked: false
  },
]

export default App;
