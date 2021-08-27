import React, { useRef, useState } from 'react';

const Item = ({item , onDel}) => {
    const {id, text} = item

    return (
        <li>
            번호:{id} / 할 일:{text}
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

const List = ({data, onDel}) => {
    return (
        <ul>
            {
                data.map(item => <Item key={item.id} item={item} 
                    onDel={onDel} />)
            }
        </ul>
    );
};

const Form = ({onAdd}) => {
    const [text, setText] = useState('')
    const textRef = useRef()
    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onAdd1 = () => {
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <div>
            <input type="text" value={text} ref={textRef} onChange={onText} />
            <button onClick={onAdd1}>추가</button>
        </div>
    );
};

const Test1 = () => {
    const no = useRef(4)

    const [data, setData] = useState([
        {id: 1, text: '청소하기'},
        {id: 2, text: '밥먹기'},
        {id: 3, text: '운동하기'},
    ])

    // 데이터 추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text
            }
        ])
    }

    // 삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <div>
            <h1>TodoList</h1>
            <Form onAdd={onAdd} />
            <List data={data} onDel={onDel} />
        </div>
    );
};

export default Test1;