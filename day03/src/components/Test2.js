import React from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    // 함수 영역

    return (
        <div>
            {/* jsx 영역 */}
            <h2>함수형 컴포넌트, props</h2>
            <Test2Sub 
                name="홍길동"
                age={20}
                addr="서울"
                tel="010-111-3333"
                sex="남자"
                color="skyblue"
                done={true}
            />
            <hr />
            <Test2Sub 
                name="김석진"
                age={30}
                tel="010-222-3333"
                color="pink"
                done={true}
            />
            <hr />
            <Test2Sub />
        </div>
    );
};

export default Test2;