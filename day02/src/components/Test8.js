import React, { Component } from 'react';

class Test8 extends Component {
    // 클래스 영역
    handleClick1 = () => {
        alert('연습1')
    }

    handleClick2 = () => {
        alert('연습2')
    }

    handleClick3 = () => {
        alert('연습3')
    }

    handleClick4 = (num) => {
        alert(num)
    }

    // const 함수명 = () => {} 

    render() {
        return (
            <div>
                {/* 클래스 영역의 값을 출력할 경우 this를 꼭 써준다. */}
                {/* 함수형 => onClick={handleClick1} */}
                <button onClick={this.handleClick1}>클릭1</button>
                <button onClick={this.handleClick2}>클릭2</button>
                <button onClick={this.handleClick3}>클릭3</button>
                <button onClick={() => alert('연습4')}>클릭4</button>
                <button onClick={() => alert('연습5')}>클릭5</button>
                <br/>
                <br/>
                {/* 
                    onClick={this.함수명(값)} -> 즉시 실행/onClick 값 전달 안됨

                    값이 전달된 경우는 반드시 함수로 한번 묶어준다.
                    onClick={() => this.함수명(값)}
                */}
                <button onClick={() => this.handleClick4(100)}>값전달</button>
                <button onClick={() => this.handleClick4(200)}>값전달</button>
                <button onClick={() => this.handleClick4(300)}>값전달</button>
            </div>
        );
    }
}

export default Test8;