import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [count, setCount] = useState(1)
    const [step, setStep] = useState(1)

    useEffect(() => {
        console.log('setInterval')
        const id = setInterval(() => {
            setCount(count => count + step)
        }, 1000)
        return () => {
            console.log('clearInterval')
            clearInterval(id)
        }
    }, [step])

    const onStep = (e) => {
        const {value} = e.target
        setStep(Number(value))
    }

    return (
        <div style={{margin:30}}>
            <input type="text" value={step} onChange={onStep} />
            <h1>{count}</h1>
        </div>
    );
};

export default Test6;