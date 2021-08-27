import React, { useState } from 'react';

const Test17 = () => {
    const [data, setData] = useState([
        {name: '홍길동' , age: 20},
        {name: '김석진' , age: 30},
        {name: '전정국' , age: 25},
        {name: '김남준' , age: 28},
    ])

    return (
        <div>
            {
                data.map((item, index) => <p key={index}>
                    {index} / {item.name} / {item.age}
                </p>)
            }
        </div>
    );
};

export default Test17;