import React from 'react';

const Test7 = () => {
    // form 에 관련된 event, evt, e
    const click = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
        /*
            event.target : 클릭한 부분
            event.currentTarget : 이벤트 건 부분
        */
    }

    return (
        <div>
            <button onClick={click}>
                <span>확인</span><br />
                <b>클릭</b>
            </button>
        </div>
    );
};

export default Test7;