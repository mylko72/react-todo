import React from 'react';
import styles from './TodoHeader.module.css';
import { IoSunnyOutline } from "react-icons/io5";

export default function TodoHeader() {

  console.log('styles', styles);

  return (
    <header className={`${styles.header}`}>
      <IoSunnyOutline className={styles.mode} />
      <ul className={styles.filtered}>
        <li className={styles.active}><a href="#">All</a></li>
        <li><a href="#">Active</a></li>
        <li><a href="#">Completed</a></li>                        
      </ul>
    </header>      
  );
}

