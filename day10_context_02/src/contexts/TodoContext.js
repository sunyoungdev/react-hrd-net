import React, { createContext, useRef, useState } from 'react';

export const TodoContext = createContext()

const TodoProvider = (props) => {
    const no = useRef(6)
    const [text, setText] = useState('아무개')
    const [todos, setTodos ] = useState([
        {id:1, text:'홍길동',done:true },
        {id:2, text:'강호동',done:true },
        {id:3, text:'고민지',done:false },
        {id:4, text:'이도현',done:false },
        {id:5, text:'이승기',done:true },
    ])

    const changeInput = (e) => {
        const { value } = e.target 
        setText( value )
    }

    const onAdd = (text)  => {
        if(!text) return
        
        setTodos([
            ...todos, 
            {
                id: no.current++,
                text : text ,
                done:false 
            }
        ])
        setText('')
    }

    const onToggle = (id) => {
        const newData = todos.map(todo => todo.id === id ? 
                                    {...todo, done: !todo.done} : todo)
        setTodos(newData)
    }


    return (
        <TodoContext.Provider value={{todos, text, changeInput, onAdd, onToggle}}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;