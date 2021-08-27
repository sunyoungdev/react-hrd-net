import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoInput = () => {
    const {text, changeInput, onAdd} = useContext( TodoContext )

    const onSubmit =(e) => {
        e.preventDefault()
        onAdd(text)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} />
        </form>
    );
};

export default TodoInput;