import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function ToDo({id, todo, onChange, onSelected, onDelete, styles}) {
    return (
        <>
            <input 
                type="checkbox" 
                name="chk" 
                id={`title${id}`} 
                value={todo.checked} 
                checked={todo.checked}
                onChange={() => onChange(todo)}
            />
            <label htmlFor={`title${id}`}>{todo.name}</label>
            <div className={styles.utils}>
                <button type="button" disabled={todo.checked} onClick={() => onSelected(id, todo.name)}><AiOutlineEdit  /></button>
                <button type="button" onClick={() => onDelete(todo)}><AiOutlineDelete  /></button>            
            </div>
        </> 
    );
}