import React from 'react';

const TodoItem = ({todo, onDel, onToggle}) => {
    const {id, text, done} = todo

    return (
        <li className={done ? 'on' : ''}>
            <span onClick={() => onToggle(id)}>✔ </span>
            <em onClick={() => onToggle(id)}>{text}</em>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;