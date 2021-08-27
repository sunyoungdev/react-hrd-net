import React, { useRef, useState } from 'react';

const Test14 = () => {
    const usernameRef = useRef()
    const [username, setUsername] = useState('')
    const [userpw, setUserpw] = useState('')
    const [email, setEmail] = useState('')

    const change1 = (e) => {
        const {value} = e.target
        setUsername(value)
    }
    const change2 = (e) => {
        const {value} = e.target
        setUserpw(value)
    }
    const change3 = (e) => {
        const {value} = e.target
        setEmail(value)
    }

    const onReset = () => {
        setUsername('')
        setUserpw('')
        setEmail('')
        usernameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                <input type="text" onChange={change1} value={username} 
                ref={usernameRef}/>
                <input type="text" onChange={change2} value={userpw}/>
                <input type="text" onChange={change3} value={email}/>
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름: {username}</h4>
            <h4>비번: {userpw}</h4>
            <h4>이메일: {email}</h4>
        </div>
    );
};

export default Test14;