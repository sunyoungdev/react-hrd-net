import React, { useState } from 'react';

const Test18 = () => {
    /*
        클래스 선언: state = {변수: 초기값}
        변경: this.setState({변수: 변경값})
        
        함수형
        const [state, setState] = useState(초기값)
    */
    const [name, setName] = useState('김철수')

    return (
        <div>
            <h1>값 출력 : {name}</h1>
        </div>
    );
};

export default Test18;