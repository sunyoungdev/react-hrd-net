 import React from 'react';
 import { AiOutlineCloseCircle } from 'react-icons/ai';
 import { Article } from '../styled/planstyle'

const PlanItem = ({plan, onToggle, onDel}) => {
    const {id, text, day, done} = plan

    return (
        <Article className={done ? 'on' : ''} onDoubleClick={() => onToggle(id)}>
            <h3>일정: {text}</h3>
            <p>일시: {day}</p>
            <i className="icon" onClick={() => onDel(id)}>
                <AiOutlineCloseCircle />
            </i>
        </Article>
    );
};

export default PlanItem; 