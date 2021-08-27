import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/modules/todos';

const TodoItem = ({todo}) => {
    const {id, text} = todo
    const dispatch = useDispatch()

    return (
        <div>
            {id} / {text}
            <button onClick={() => dispatch(remove(id))}>삭제</button>
        </div>
    );
};

export default TodoItem;