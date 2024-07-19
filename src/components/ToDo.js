import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function ToDo({todo, onUpdate, onSelected, onDelete, styles}) {
    const { id, name, status } = todo;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }

    return (
        <li>
            <input 
                type="checkbox" 
                name="chk" 
                id={id} 
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor={id}>{name}</label>
            <div className={styles.utils}>
                <button type="button" disabled={status === 'completed'} onClick={() => onSelected(todo)}><AiOutlineEdit  /></button>
                <button type="button" onClick={() => onDelete(todo)}><AiOutlineDelete /></button>
            </div>
        </li> 
    );
}