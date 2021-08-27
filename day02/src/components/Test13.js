import React, { Component } from 'react';
import './Test13.css'

class Test13 extends Component {
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

    render() {
        // js
        // 비구조할당
        const {data} = this.state
        return (
            <div className="Test13">
                <h2>언더커버 출연진</h2>
                <table>
                    <colgroup>
                        <col className="w1" />
                        <col className="w2" />
                        <col className="w3" />
                        <col className="w4" />
                        <col className="w5" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                            <th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td>유재석</td>
                            <td>20</td>
                            <td>서울</td>
                            <td>참여</td>
                        </tr> */}
                        {
                            data.map(item => <tr>
                                    <td>{item.no}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.addr}</td>
                                    <td>{item.isActive ? '참여' : '비참여'}</td>
                                    {/* 
                                        <td>{item.isActive && '참여'}</td>
                                        <td>{item.isActive || '비참여'}</td> 
                                    */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test13;