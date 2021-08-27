import React, { useRef, useState } from 'react';
import '../utils/css/reset.css'
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import './style.css'

const Customer = () => {
    const no = useRef(5)
    const userData = [
        {id: 1, name: '김도기', addr: '무지개택시기사'},
        {id: 2, name: '장성철', addr: '무지개택시대표'},
        {id: 3, name: '고은', addr: '해커'},
        {id: 4, name: '강하다', addr: '열혈검사'},
    ]

    const [users, setUsers] = useState(userData)
    const [isEdit, setIsEdit] = useState(false)
    const [current, setCurrent] = useState({})

    // 데이터 추가
    const onAdd = (user) => {
        user.id = no.current++
        // setUsers(users.concat(user))
        setUsers([...users, user])
    }

    // 데이터 삭제
    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    // 데이터 수정
    const onModify = (user) => {
        setIsEdit(true)
        setCurrent(user)
    }

    // 데이터 업데이트
    const onUpdate = (id, updateUser) => {
        setIsEdit(false)
        setUsers(users.map(user => user.id === id ? updateUser : user))        
    }

    return (
        <div className="Customer">
            {
                isEdit ? 
                <EditUser current={current} onUpdate={onUpdate} 
                setIsEdit={setIsEdit} /> 
                : 
                <AddUser onAdd={onAdd} />
            }            
            <ListUser users={users} onRemove={onRemove} onModify={onModify} />
        </div>
    );
};

export default Customer;