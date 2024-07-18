import React, { useState, useContext } from 'react';
import styles from './TodoHeader.module.css';
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoHeader({todos, activeTodos, completedTodos, onFiltered}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <header className={`${darkMode ? styles.dark : ''} ${styles.header}`}>
      <button onClick={toggleDarkMode}>
        { darkMode ?
          <AiOutlineSun className={styles.mode} /> :
          <AiOutlineMoon className={styles.mode} />        
        }
      </button>
      
      <ul className={styles.filtered}>
        <li className={activeIndex === 0 ? styles.active : ''}>
          <button 
            type="button" 
            onClick={() => {              
              onFiltered('all');
              setActiveIndex(0);
            }}
          >
            All
          </button>
          <span className={styles.count}>{todos.length}</span>
        </li>
        <li className={activeIndex === 1 ? styles.active : ''}>
          <button 
            type="button" 
            onClick={() => {
              onFiltered('active');
              setActiveIndex(1);
            }}
          >
            Active
          </button>
          <span className={styles.count}>{activeTodos.length}</span>          
        </li>
        <li className={activeIndex === 2 ? styles.active : ''}>
          <button
            type="button" 
            onClick={() => {
              onFiltered('completed');
              setActiveIndex(2);
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

