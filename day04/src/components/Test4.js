import React, { useRef, useState } from 'react';

const Test4 = () => {
    // 고유 id
    const no = useRef(1)
    // focus
    const idRef = useRef()

    // 데이터를 담을 공간
    const [data, setData] = useState([])

    // form 의 상태값
    const [form, setForm] = useState({
        userid: '',
        userpw: ''
    })

    // 비구조할당
    const {userid, userpw} = form

    const onText = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++,
                userid,     //키값과 들어오는 값을 똑같이 할거면 한번만 써도 됨
                userpw
            }
        ])

        setForm({
            userid: '',
            userpw:''
        })

        idRef.current.focus()
    }

    /*
    const onAdd1 = () => {
        setData([
            ...data,
            {
                id: no.current++,
                userid: userid,
                userpw: userpw
            }
        ])
    }*/

    return (
        <div>
            <input type="text" name="userid" onChange={onText} value={userid} ref={idRef} />
            <input type="text" name="userpw" onChange={onText} value={userpw} />
            <button onClick={onAdd}>추가</button>

            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.userid} / {item.userpw}
                </p>)
            }
        </div>
    );
};

export default Test4;