import React from 'react';
import ToDo from './ToDo';
import styles from './TodoLists.module.css';

export default function TodoLists({ todos, mode, onUpdate, onSelected, onDelete }) {

  return (
    <div className={`${styles[mode]} ${styles.todolists}`}>
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