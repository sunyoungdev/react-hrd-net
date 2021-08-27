import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({todos, onDel, onToggle}) => {
    return (
        <ul className="TodoList">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} 
                    onDel={onDel} onToggle={onToggle} />)
            }            
        </ul>
    );
};

export default TodoList;