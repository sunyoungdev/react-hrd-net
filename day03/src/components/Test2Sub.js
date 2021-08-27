import React from 'react';
import PropTypes from 'prop-types';

const Test2Sub = ({name, age, addr, tel, sex, color, done}) => {
    return (
        <div style={{width:400, padding:20, border:`1px solid ${color}`, margin:10}}>
            <h2>{name} 신상명세서</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>성별 : {sex}</li>
                <li>색 : {color}</li>
                <li>확인/취소 : {done ? '확인' : '취소'}</li>
            </ul>
        </div>
    );
};

// propTypes 

Test2Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    sex: PropTypes.string,
    tel: PropTypes.string,
    color: PropTypes.string,
    done: PropTypes.bool,
};

// props의 초깃값을 정의합니다.
Test2Sub.defaultProps = {
    name: 'Stranger',
    age: 20,
    addr: '주소',
    color: 'lime',
    done: true,
    tel: '010-0000-0000',
    sex: '남/여',
};

  
/*
const Test2Sub = (props) => {
    // 비구조할당
    const {name, age, addr, tel, sex, color, done} = props

    return (
        <div style={{width:400, padding:20, border:`1px solid ${color}`, margin:10}}>
            <h2>{name} 신상명세서</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>성별 : {sex}</li>
                <li>색 : {color}</li>
                <li>확인/취소 : {done ? '확인' : '취소'}</li>
            </ul>
        </div>
    );
};
*/

/*
const Test2Sub = (props) => {
    return (
        <div style={{width:400, padding:20, border:`1px solid ${props.color}`, margin:10}}>
            <h2>{props.name} 신상명세서</h2>
            <ul>
                <li>이름 : {props.name}</li>
                <li>나이 : {props.age}</li>
                <li>주소 : {props.addr}</li>
                <li>전화 : {props.tel}</li>
                <li>성별 : {props.sex}</li>
                <li>색 : {props.color}</li>
                <li>확인/취소 : {props.done ? '확인' : '취소'}</li>
            </ul>
        </div>
    );
};
*/

export default Test2Sub;