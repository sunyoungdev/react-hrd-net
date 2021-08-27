import React from 'react';

const Test16 = () => {
    // 함수 선언
    const msg = '안녕하세요 저는 홍길동 입니다. 지금은 연습중'
    const message = (len) => {
        let str = ''
        if(msg.length > len) {
            str = msg.substr(0, len) + '...'
        }
        return (str)
    }

    return (
        <div>
            <h2>함수형 : 함수 - rsc</h2>
            <p>{message(10)}</p>
            <p>{message(15)}</p>
        </div>
    );
};

export default Test16;