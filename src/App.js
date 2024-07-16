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
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const myStorage = JSON.parse(localStorage.getItem('todos') || '[]');    
    if(!myStorage.length){
      for(let todo of todos){
        saveLocalStorage(myStorage, todo)
      };
    }else{
      setTodos(myStorage);
    }

    const activeTodos = todos.filter(todo => !todo.checked)
    setActiveTodos(activeTodos);

    const completedTodos = todos.filter(todo => todo.checked)
    setCompletedTodos(completedTodos);

    const allTodos = todos.map(todo => todo)

    if(filter === 'active'){
      setFilteredTodos(activeTodos);
    }else if(filter === 'completed'){
      setFilteredTodos(completedTodos);
    }else{
      setFilteredTodos(allTodos);
    }
  }, [todos, filter])

  const saveLocalStorage = (storage, item) => {
    storage.push(item);
    const uniqueTodoData = Array.from(new Set(storage));
    localStorage.setItem('todos', JSON.stringify(uniqueTodoData));
  }

  // 할일 활성/비활성
  const handleChange = (idx) => {
    const checkedTodos = todos.map((todo, i) => {
      if(idx === i){
        return {
          ...todo,
          checked: !todo.checked
        }
      }
      return todo;
    });
  
    setTodos(checkedTodos);
    localStorage.setItem('todos', JSON.stringify(checkedTodos));
  }

  // 할일 추가
  const handleAdd = (item) => {
    const todoItem = {
      name: item,
      checked: false
    }

    setTodos([...todos, todoItem])

    const myStorage = JSON.parse(localStorage.getItem('todos') || '[]');
    saveLocalStorage(myStorage, todoItem)
  }

  // 할일 수정
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
    localStorage.setItem('todos', JSON.stringify(editTodos));    
  }

  // 할일 삭제
  const handleDelete = (item) => {
    const nextTodos = todos.filter((todo, i) => todo.name !== item.name);
    setTodos(nextTodos);

    localStorage.setItem('todos', JSON.stringify(nextTodos));
  }

  // 할일 필터링
  const handleFilter = (type) => {
    setFilter(prev => type);

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

  // 모드 전환
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
