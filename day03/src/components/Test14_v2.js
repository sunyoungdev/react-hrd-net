import React, { useRef, useState } from 'react';

const Test14 = () => {
    const usernameRef = useRef()
    // 상태 초기값, 숫자, 문자, [], {}, 논리값
    // form 정보 => 객체
    const [form, setForm] = useState({
        username: '',
        userpw: '',
        email: ''
    })
    // form.username, form.userpw, form.email

    const change1 = (e) => {
        const {value} = e.target
    }
    const change2 = (e) => {
        const {value} = e.target
    }
    const change3 = (e) => {
        const {value} = e.target
    }

    const onReset = () => {

        usernameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                <input type="text" onChange={change1} value={form.username} 
                ref={usernameRef}/>
                <input type="text" onChange={change2} value={form.userpw}/>
                <input type="text" onChange={change3} value={form.email}/>
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름: {form.username}</h4>
            <h4>비번: {form.userpw}</h4>
            <h4>이메일: {form.email}</h4>
        </div>
    );
};

export default Test14;