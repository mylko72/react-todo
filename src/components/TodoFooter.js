import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoFooter.module.css';

export default function TodoFooter({ mode, onAdd, onEdit, todo }) {
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = item.replace(/^\s+|\s+$/gm,'');
    if(!text.length){
      setItem('');
      return false;
    }
    todo.name === '' ? onAdd({ id: uuidv4(), name: text, checked: false }) : onEdit(todo, { id: uuidv4(), name: text, checked: false });
    setItem('');
  }

  const handleCancel = () => {
    setItem('');
    todo.name = '';
  }

  useEffect(() => {
    if(todo.name !== ''){
      setItem(prev => todo.name);
    }
  }, [todo])

  return (
    <div className={`${styles[mode]} ${styles.footer}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={e => setItem(prev => e.target.value)} />
        <button type="submit" className={todo.name && styles.edit}>{todo.name === '' ? 'Add' : 'Edit'}</button>
        {todo.name && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>
    </div>
  );
}

