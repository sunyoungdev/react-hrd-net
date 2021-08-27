import React from 'react';

const FriendItem = ({friend, onDel}) => {
    const {id, name, age, image} = friend

    return (
        <li>
            <p><img src={image} alt={name} /></p> 
            <div>
                <strong>이름: {name}</strong>
                <span>나이: {age}</span>
                <button onClick={() => onDel(id)}>❌</button>
            </div>
        </li>
    );
};

export default FriendItem;