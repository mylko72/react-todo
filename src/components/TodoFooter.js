import { useState, useEffect } from 'react';
import styles from './TodoFooter.module.css';

export default function TodoFooter({ mode, onAdd, onEdit, todo }) {
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem('');
    todo.name === '' ? onAdd(item) : onEdit(todo, item);
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

