import React, { Component } from 'react';

class Test15 extends Component {
    // class
    state = {
        data: [
            {no:1, name:'지진희1', age: 41, addr: '서울1', isActive: false},
            {no:2, name:'지진희2', age: 42, addr: '서울2', isActive: false},
            {no:3, name:'지진희3', age: 43, addr: '서울3', isActive: true},
            {no:4, name:'지진희4', age: 44, addr: '서울4', isActive: false},
            {no:5, name:'지진희5', age: 45, addr: '서울5', isActive: true},
            {no:6, name:'지진희6', age: 46, addr: '서울6', isActive: false},
            {no:7, name:'지진희7', age: 47, addr: '서울7', isActive: true},
            {no:8, name:'지진희8', age: 48, addr: '서울8', isActive: false},
        ]
    }

    // 값 삭제
    click1 = () => {
        this.setState({
            data: this.state.data.filter(item => item.no !== 1)
        })
    }

    click2 = () => {
        const {data} = this.state
        this.setState({
            data: data.filter(item => item.no !== 2)
        })
    }

    click3 = () => {
        const {data} = this.state
        this.setState({
            data: data.filter(item => item.no !== 3)
        })
    }

    click4 = (num) => {
        const {data} = this.state
        this.setState({
            data: data.filter(item => item.no !== num)
        })
    }

    // 값 수정
        // if문 사용
    click5 = () => {
        const {data} = this.state
        this.setState({
            data: data.map(item => {
                if(item.no === 1) {
                     return {
                         ...item, // spread 연산자 
                         name: '이젠',
                         age: 10,
                         addr: '서울시 서초구',
                         isActive: true
                     }
                } else {
                    return item
                }
            })
        })
    }

    click6 = () => {
        const {data} = this.state
        this.setState({
            data: data.map(item => {
                if(item.no === 2) {
                    return {
                        ...item,
                        name: '이철수',
                        age: 20,
                        addr: '제주도',
                        isActive: true
                    }
                }
                return item
            })
        })
    }

        // 삼항연산자 사용
    click7 = () => {
        const {data} = this.state
        this.setState({
            data: data.map(item => item.no === 5 ? {
                ...item, name: '김철수', age: 10, addr: '서울'
            } : item)
        })
    }

    click8 = (num) => {
        const {data} = this.state
        this.setState({
            data: data.map(item => item.no === num ? {
                ...item, name: '박철수', age: 15, addr: '서울'
            } : item)
        })
    }

    render() {
        // js 비구조할당
        const {data} = this.state

        return (
            <div>
                <h1>삭제(filter), 수정(map)</h1>
                <p>
                    <button onClick={this.click1}>삭제1</button>
                    <button onClick={this.click2}>삭제2</button>
                    <button onClick={this.click3}>삭제3</button>
                </p>
                <hr/>
                <p>
                    <button onClick={() => this.click4(3)}>삭제1</button>
                    <button onClick={() => this.click4(5)}>삭제2</button>
                    <button onClick={() => this.click4(2)}>삭제3</button>
                </p>
                <hr/>
                <p>
                    <button onClick={this.click5}>수정1</button>
                    <button onClick={this.click6}>수정2</button>
                    <button onClick={this.click7}>수정3</button>
                </p>
                <hr />
                <p>
                    <button onClick={() => this.click8(3)}>수정1</button>
                    <button onClick={() => this.click8(4)}>수정2</button>
                </p>

                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.no} / {item.name} / {item.age} / {item.addr} / {item.isActive ? '참여' : '미참여'}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test15;