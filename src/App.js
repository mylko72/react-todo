import { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoLists from './components/TodoLists';

function App() {
  const [todos, setTodos] = useState(todoLists);
  const [to, setTo] = useState({index:'', name: ''});

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

  return (
    <div className="App-container">
      <div className="App-todo">
        <TodoHeader />
        <TodoLists 
          todos={todos} 
          onChange={idx => handleChange(idx)} 
          onSelected={(index, name) => setTo({index, name})}
          onDelete={idx => handleDelete(idx)}
        />
        <TodoFooter 
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
