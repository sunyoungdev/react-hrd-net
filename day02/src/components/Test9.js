import React, { Component } from 'react';

class Test9 extends Component {
    // class 영역 => 출력 this 필요
    // state 객체 : 유동적으로 변할 값을 담아두는 공간

    // 변경될 변수: 이름, 나이, 주소
    state = {
        name: '아무개',
        age: 0,
        addr: '주소'
    }

    handleClick1 = () => {
        this.setState({
            name: '홍길동',
            age: 20,
            addr: '서울'
        })
    }
    handleClick2 = () => {
        this.setState({
            name: '강호동',
            age: 30,
            addr: '인천'
        })
    }
    handleClick3 = () => {
        this.setState({
            name: '이효리',
            age: 30,
            addr: '제주도'
        })
    }

    render() {
        return (
            <div>
                <h2>
                    이름: {this.state.name}/
                    나이: {this.state.age}/
                    주소: {this.state.addr}
                </h2>
                <p>
                    <button onClick={this.handleClick1}>변경1</button>
                    <button onClick={this.handleClick2}>변경2</button>
                    <button onClick={this.handleClick3}>변경3</button>
                    <br />
                    <br />
                    <button onClick={() => this.setState({
                        name: '제시', age: 22, addr: '서울'
                    })}>
                        변경
                    </button>
                    <button onClick={() => this.setState({
                        name: '화사', age: 22, addr: '제주'                
                    })}>
                        변경
                    </button>
                </p>
            </div>
        );
    }
}

export default Test9;

/*
    리액트에서는 값을 유동으로 처리할 경우
    const 변수 = 값 (x)

    react 값이 유동으로 변경될 경우
    1) class
        선언: state = {키: 초기값}
        변경: this.setState({키: 변경값})
    2) 함수형 hook
        const [state, setState] = useState(초기값)
*/