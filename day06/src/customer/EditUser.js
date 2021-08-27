import React, { useEffect, useState } from 'react';

const EditUser = ({current, onUpdate, setIsEdit}) => {
    const [user, setUser] = useState(current)
    const {id, name, addr} = user

    const changeInput = (e) => {
        const  {value, name} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // id: id 비교용, user: 데이터 업데이트용
        onUpdate(id, user)
        setUser({
            name: '', addr: ''
        })
    }

    // current 값이 바뀔때마다 업데이트
    useEffect(() => {
        setUser(current)
    }, [current])

    return (
        <form onSubmit={onSubmit}>
            <h2>고객명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} />
            </p>
            <p>
                <label>직업</label>
                <input type="text" value={addr} name="addr" onChange={changeInput} />
            </p>
            <p>
                <button>수정</button>
                <button onClick={() => setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;