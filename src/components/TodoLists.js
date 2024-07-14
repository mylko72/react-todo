import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import styles from './TodoLists.module.css';

export default function TodoLists() {
  return (
    <div className={`${styles.todolists}`}>
      <ul>
        <li>
          <input type="checkbox" name="chk" id="title" />
          <lable htmlFor="title">공부하기</lable>
          <div className={styles.utils}>
            <button type="button"><AiOutlineEdit  /></button>
            <button type="button"><AiOutlineDelete  /></button>            
          </div>
        </li>
        <li>
          <input type="checkbox" name="chk" id="title" />
          <lable htmlFor="title">영화보기</lable>
          <div className={styles.utils}>
            <button type="button"><AiOutlineEdit  /></button>
            <button type="button"><AiOutlineDelete  /></button>            
          </div>
        </li>
        <li>
          <input type="checkbox" name="chk" id="title" />
          <lable htmlFor="title">청소하기</lable>
          <div className={styles.utils}>
            <button type="button"><AiOutlineEdit  /></button>
            <button type="button"><AiOutlineDelete  /></button>            
          </div>
        </li>
      </ul>
    </div>
  );
}

