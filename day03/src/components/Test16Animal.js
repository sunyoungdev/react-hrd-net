import React from 'react';

const Test16Animal = ({ani, onAni}) => {
    return (
        <div>
            <label>동물: </label>
            <input type="text" value={ani} onChange={onAni}/>
        </div>
    );
};

export default Test16Animal;