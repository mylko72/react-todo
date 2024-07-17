import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoLists from './components/TodoLists';

function App() {
  const myStorage = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(myStorage || todoLists);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [item, setItem] = useState({});
  const [mode, setMode] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const myStorage = JSON.parse(localStorage.getItem('todos') || '[]');    
    if(!myStorage.length){
      for(let todo of todos){
        saveLocalStorage(myStorage, todo)
      };
    }

    const activeTodos = todos.filter(todo => todo.status === 'active');
    setActiveTodos(activeTodos);

    const completedTodos = todos.filter(todo => todo.status === 'completed');
    setCompletedTodos(completedTodos);

    const allTodos = todos.map(todo => todo);

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
  const handleChange = (item) => {
    const checkedTodos = todos.map((todo, i) => {
      if(item.id === todo.id){
        return item;
      }
      return todo;
    });
  
    setTodos(checkedTodos);
    localStorage.setItem('todos', JSON.stringify(checkedTodos));
  }

  // 할일 추가
  const handleAdd = (todo) => {
    setTodos([...todos, todo])
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));    
  }

  // 할일 수정
  const handleEdit = (prevItem, newItem) => {
    const editTodos = todos.map((todo, i) => {
      if(prevItem.id === todo.id){
        return newItem
      }
      return todo
    });

    setTodos(editTodos);
    setItem({});
    localStorage.setItem('todos', JSON.stringify(editTodos));    
  }

  // 할일 삭제
  const handleDelete = (item) => {
    const nextTodos = todos.filter((todo, i) => todo.id !== item.id);
    setTodos(nextTodos);

    localStorage.setItem('todos', JSON.stringify(nextTodos));
  }

  // 할일 필터링
  const handleFilter = (type) => {
    setFilter(prev => type);

    if(type === 'active'){
      const activeTodos = todos.filter(todo => todo.status === 'active');
      setFilteredTodos(activeTodos);
    }else if(type === 'completed'){
      const completedTodos = todos.filter(todo => todo.status === 'completed')
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
          onUpdate={idx => handleChange(idx)} 
          onSelected={item => setItem(item)}
          onDelete={item => handleDelete(item)}
        />
        <TodoFooter 
          mode={mode}
          onAdd={item => handleAdd(item)} 
          onEdit={(prevItem, newItem) => handleEdit(prevItem, newItem)} 
          onCancel={() => setItem({})}
          editItem={item}
        />
      </div>
    </div>
  );
}

const todoLists = [
  {
    id: uuidv4(),
    name: '리액트 공부하기',
    status: 'active'
  },
  {
    id: uuidv4(),
    name: '청소하기',
    status: 'active'
  },
  {
    id: uuidv4(),
    name: '영화보기',
    status: 'active'
  },
]

export default App;
