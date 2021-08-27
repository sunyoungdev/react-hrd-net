import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test3 = () => {
    const ref1 = useRef()

    // mount 처음 한번 나타나서 실행할 때
    useEffect(() => {
        ref1.current.focus()
    }, [])

    useLayoutEffect(() => {
        // ref1.current.focus()
    })

    return (
        <div style={{margin:20}}>
            <input type="text" ref={ref1} />
            <input type="text" />
        </div>
    );
};

export default Test3;