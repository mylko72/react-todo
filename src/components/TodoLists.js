import React from 'react';
import ToDo from './ToDo';
import styles from './TodoLists.module.css';

export default function TodoLists({ todos, onUpdate, onSelected, onDelete }) {

  return (
    <div className={`${styles.todolists}`}>
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