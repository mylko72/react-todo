import React, { useState } from 'react';
import styles from './TodoHeader.module.css';
import { IoSunnyOutline } from "react-icons/io5";

export default function TodoHeader({todos, mode, activeTodos, completedTodos, onFiltered, onChangeMode}) {
  const [index, setIndex] = useState(0);

  return (
    <header className={`${styles[mode]} ${styles.header}`}>
      <IoSunnyOutline className={styles.mode} onClick={() => onChangeMode('dark')} />

      <ul className={styles.filtered}>
        <li className={index === 0 ? styles.active : ''}>
          <button 
            type="button" 
            onClick={() => {              
              onFiltered('all');
              setIndex(0);
            }}
          >
            All
          </button>
          <span className={styles.count}>{todos.length}</span>
        </li>
        <li className={index === 1 ? styles.active : ''}>
          <button 
            type="button" 
            onClick={() => {
              onFiltered('active');
              setIndex(1);
            }}
          >
            Active
          </button>
          <span className={styles.count}>{activeTodos.length}</span>          
        </li>
        <li className={index === 2 ? styles.active : ''}>
          <button 
            type="button" 
            onClick={() => {
              onFiltered('completed');
              setIndex(2);
            }}
          >
            Completed
          </button>
          <span className={styles.count}>{completedTodos.length}</span>          
        </li>
      </ul>
    </header>      
  );
}

