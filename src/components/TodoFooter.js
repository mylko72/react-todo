import { useState, useContext, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoFooter.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoFooter({ onAdd, onEdit, onCancel, editItem }) {
  const [item, setItem] = useState('')
  const { darkMode } = useContext(DarkModeContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = item.replace(/^\s+|\s+$/gm,'');
    if(!text.length){
      setItem('');
      return false;
    }
    Object.keys(editItem).length === 0 ? onAdd({ id: uuidv4(), name: text, status: 'active' }) : onEdit(editItem, { id: editItem.id, name: text, status: editItem.status });
    setItem('');
  }

  const handleCancel = () => {
    setItem('');
    onCancel();
  }

  useEffect(() => {
    if(editItem.name !== ''){
      setItem(prev => editItem.name);
      inputRef.current.focus();
    }
  }, [editItem])

  return (
    <div className={`${darkMode ? styles.dark : ''} ${styles.footer}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" value={item} ref={inputRef} onChange={e => setItem(prev => e.target.value)} />
        <button type="submit" className={Object.keys(editItem).length && styles.edit}>{!Object.keys(editItem).length ? 'Add' : 'Edit'}</button>
        {Object.keys(editItem).length > 0 && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>
    </div>
  );
}

