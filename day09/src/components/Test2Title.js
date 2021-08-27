import React from 'react';

const Test2Title = () => {
    console.log('Test2Title')

    return (
        <div>
            <h3>나이와 급여</h3>
            <h3>
                React.memo(컴포넌트) : 컴포넌트의 return 값을 기억해서 값이 바뀌는 것만 다시 실행시킴
            </h3>
        </div>
    );
};

export default React.memo(Test2Title);