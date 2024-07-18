import React, { useContext } from 'react';
import ToDo from './ToDo';
import styles from './TodoLists.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoLists({ todos, onUpdate, onSelected, onDelete }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? styles.dark : ''} ${styles.todolists}`}>
      <ul>
        {
          todos.map((todo, idx) =>          
            <ToDo
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onSelected={onSelected}
              onDelete={onDelete}
              styles={styles}
            />
          )
        }
      </ul>
    </div>
  );
}