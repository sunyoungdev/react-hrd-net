import React, { createContext, useState } from 'react';

export const CountContext = createContext()

const CountProvider = (props) => {
    const [count, setCount] = useState(0)

    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}

    return (
        <CountContext.Provider value={{count, increment, decrement}}>
            {props.children}
        </CountContext.Provider>
    );
};

export default CountProvider;