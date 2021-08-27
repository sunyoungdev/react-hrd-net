import React, { useState } from 'react';

const Name = () => {
    const [name, setName] = useState('')

    return (
        <div>
            <h3>Name 컴포넌트</h3>
            <p>
                <label htmlFor="name">이름: </label>
                <input type="text" id="name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}/>
                <span style={{marginLeft: 15}}>
                    {name}
                </span>
            </p>
        </div>
    );
};

const Animal = ({ani, onAni}) => {
    return (
        <div>
            <h3>좋아하는 동물</h3>
            <p>
                <label htmlFor="ani">동물: </label>
                <input type="text" value={ani} 
                    onChange={onAni} />
                <span style={{marginLeft: 15}}>

                </span>
            </p>
        </div>
    );
};

const Display = ({ani}) => {
    return (
        <div>
            <h3>좋아하는 동물 받아서 출력하기</h3>
            <h2>
                내가 좋아하는 동물은 {ani} 입니다.
            </h2>
            <h2>
                {
                    `내가 좋아하는 동물은 ${ani} 입니다.`
                }
            </h2>
        </div>
    );
};

const Test15 = () => {
    const [ani, setAni] = useState('고양이')

    const onAni = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            <h2>컴포넌트 분리, props 값 전달</h2>
            <Name />
            <hr />
            <Animal ani={ani} onAni={onAni} />
            <hr />
            <Display ani={ani} />
        </div>
    );
};

export default Test15;

/*
    Name - 그대로
    Animal - Display에 데이터 전달(부모 Test15를 통해)
    Display - Animal 데이터 받아서(부모 Test15를 통해) 보여주기
*/