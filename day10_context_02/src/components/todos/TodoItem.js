import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoItem = ({todo}) => {
    const {id, text, done} = todo
    const {onToggle} = useContext(TodoContext)

    return (
        <li style={{color: done ? 'hotpink' : '#000'}}>
           {id} / {text}
           <input type="checkbox" checked={done} 
            onChange={() => onToggle(id)} /> 
        </li>
    );
};

export default TodoItem;