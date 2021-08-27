import React, { useRef } from 'react';

const Test9 = () => {
    const idRef = useRef(null)
    const pwRef = useRef(null)

    const click = () => {
        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value
        }

        const json = JSON.stringify(data, null, 5)
        console.log(json)

        // JSON.stringify(value, replacer, space)
    }

    return (    
        <div>
            {/* useRef 의 설명용 실제 예제로는 적합하지 않다. 수업용 */}
            <input type="text" ref={idRef}/>
            <input type="text" ref={pwRef}/>
            <button onClick={click}>확인</button>
        </div>
    );
};

export default Test9;

/*
    useRef
    DOM 을 직접 선택해야 하는 상황일 때 
    1. 특정 요소의 크기를 가져올 때
    2. 스크롤바 위치값
    3. focus - *

    useRef 는 남용하지 말자
*/