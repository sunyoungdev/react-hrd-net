import React, { Component } from 'react';
import Test7SubSub from './Test7SubSub';

class Test7Sub extends Component {
    render() {
        // 비구조할당
        const {
            title, name, age, addr, tel, done, color
        } = this.props

        return (
            <div>
                <h2 style={{color: color}}>Test7Sub: {title}</h2>
                <ul>
                    <li>이름: {name}</li>
                    <li>나이: {age}</li>
                    <li>주소: {addr}</li>
                    <li>전화: {tel}</li>
                    <li>참여: {done ? ' 참여' : ' 비참여'}</li>
                </ul>
                <hr/>
                <Test7SubSub 
                    name = '김철수'
                    // Test7Sub props 로 내려받고 전달
                    age = {age}
                    tel = {tel}
                    color = 'tomato'
                />
            </div>
        );
    }
}

export default Test7Sub;