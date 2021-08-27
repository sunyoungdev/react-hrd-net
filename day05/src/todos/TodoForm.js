import React, { useRef, useState } from 'react';
import './TodoForm.css'

const TodoForm = ({onAdd}) => {
    const textRef = useRef('')
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        // 공백처리- text에 내용이 없으면 return 처리
        if(!text) return

        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    const onText = (e) => {
        const {value} = e.target
        setText(value)        
    }

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <input type="text" placeholder="할 일을 입력하세요" 
            value={text} onChange={onText} ref={textRef} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;