import React from 'react';

const Test2Count = ({text, count}) => {
    console.log('Test2Count')

    return (
        <div>
            <h3> {text} / {count} </h3>
        </div>
    );
};

export default React.memo(Test2Count);