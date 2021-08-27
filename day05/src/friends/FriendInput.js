import React, { useRef, useState } from 'react';

const FriendInput = ({onAdd}) => {
    const nameRef = useRef()

    const [inputs, setInputs] = useState({
        name: '', age: '', image: ''
    })

    const {name, age, image} = inputs

    const onText = (e) => {
        const {value, name} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!name) return        // 공백 처리

        onAdd(inputs)

        setInputs({
            name: '', age: '', image: ''
        })
        nameRef.current.focus()
    }

    return (
        <form className="formadd" onSubmit={onSubmit}>
            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={onText} ref={nameRef} />
            </p>
            <p>
                <label>나이</label>
                <input type="text" name="age" value={age} onChange={onText} />
            </p>
            <p>
                <label>사진</label>
                <input type="text" name="image" value={image} 
                onChange={onText} />
            </p>
            <p>
                <button>추가</button>
            </p>
        </form>
    );
};

export default FriendInput;