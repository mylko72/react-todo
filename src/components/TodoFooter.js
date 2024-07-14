import React from 'react';
import styles from './TodoFooter.module.css';

export default function TodoFooter() {
  return (
    <div className={`${styles.footer}`}>
      <form className={styles.form}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

