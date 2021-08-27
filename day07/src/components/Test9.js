import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
        border: 1px solid #999;
        width: ${props => props.w};
        margin: 10px;
        padding: 25px;
        h2{font-size: 50px;}
    `
const Button = styled.button`
    margin: 10px;
    font-size: 40px;
    padding: 0 30px 20px;
    cursor: pointer; outline:none; border: none; background: pink;
    &.up:after{content:'📤'}
    &.down:after{content:'📥'}
    &:hover{background:skyblue;}
    &:disabled{filter:grayscale(100%); cursor:not-allowed;}
`

const Test9 = () => {
    const [count, setCount] = useState(1)
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(0)

    const increment = () => {
        setCount(count > max ? max : count + 1)
    }
    const decrement = () => {
        setCount(count < min ? min : count - 1)
    }

    return (
        <Container w="400px"> 
            <h2>숫자: {count} </h2>
            <Button className="up" onClick={increment} disabled={count === max}></Button>
            <Button className="down" onClick={decrement} disabled={count === min}></Button>
        </Container>
    );
};

export default Test9;
// 숫자증가 0~10까지