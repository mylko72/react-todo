import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import styles from './TodoLists.module.css';

export default function TodoLists({ todos, mode, onChange, onSelected, onDelete }) {

  return (
    <div className={`${styles[mode]} ${styles.todolists}`}>
      <ul>
        {
          todos.map((todo, idx) => 
            <li key={idx}>
              <input 
                type="checkbox" 
                name="chk" 
                id={`title${idx}`} 
                value={todo.checked} 
                checked={todo.checked}
                onChange={() => onChange(idx)}
              />
              <label htmlFor={`title${idx}`}>{todo.name}</label>
              <div className={styles.utils}>
                <button type="button" disabled={todo.checked} onClick={() => onSelected(idx, todo.name)}><AiOutlineEdit  /></button>
                <button type="button" onClick={() => onDelete(idx)}><AiOutlineDelete  /></button>            
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
}