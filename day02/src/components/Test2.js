import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        // js 영역
        const title = '신상명세서'
        const name = '홍길동'
        const age = 20
        const addr = '서울'
        const tel = '010-0000-1111'
        const sex = '여자'

        return (
            <div>
                <h1> {title} </h1>
                <ul>
                    <li>이름: {name}</li>
                    <li>나이: {age}</li>
                    <li>주소: {addr}</li>
                    <li>전화: {tel}</li>
                    <li>성별: {sex}</li>
                </ul>
                // 한줄 주석 X
                /* 여러줄 주석 x */
                {/* 주석 처리는 이렇게 */}
                <p
                    // {} 자바스크립트 출력할 경우 블럭으로 감싸기
                    /*
                        태그 안에는 일반 주석 사용 가능
                    */
                >
                    나는 {name} 입니다.
                </p>
            </div>
        );
    }
}

export default Test2;