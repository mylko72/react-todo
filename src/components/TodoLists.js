import React from 'react';
import ToDo from './ToDo';
import styles from './TodoLists.module.css';

export default function TodoLists({ todos, mode, onChange, onSelected, onDelete }) {

  return (
    <div className={`${styles[mode]} ${styles.todolists}`}>
      <ul>
        {
          todos.map((todo, idx) => 
            <li key={idx}>
              <ToDo 
                id={idx}
                todo={todo}
                onChange={onChange}
                onSelected={onSelected}
                onDelete={onDelete}
                styles={styles}
              />
              {/* <input 
                type="checkbox" 
                name="chk" 
                id={`title${idx}`} 
                value={todo.checked} 
                checked={todo.checked}
                onChange={() => onChange(todo)}
              />
              <label htmlFor={`title${idx}`}>{todo.name}</label>
              <div className={styles.utils}>
                <button type="button" disabled={todo.checked} onClick={() => onSelected(idx, todo.name)}><AiOutlineEdit  /></button>
                <button type="button" onClick={() => onDelete(todo)}><AiOutlineDelete  /></button>            
              </div> */}
            </li>
          )
        }
      </ul>
    </div>
  );
}