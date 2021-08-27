import React, { Component } from 'react';
import './Test4.css'

class Test4 extends Component {
    render() {
        return (
            // class 는 이미 리액트 예약어이기 때문에 className 사용
            <div className="wrap">
                <div className="box box1">Test</div>
                <div className="box box2">Test</div>
                <div className="box box3">Test</div>
                <div className="box box4">Test</div>
            </div>
        );
    }
}

export default Test4;