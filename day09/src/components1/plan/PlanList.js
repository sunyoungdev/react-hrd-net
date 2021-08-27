import React from 'react';
import PlanItem from './PlanItem';

const PlanList = ({plans, onToggle, onDel}) => {
    return (
        <div>
            {
                plans.map(plan => <PlanItem key={plan.id} plan={plan} onToggle={onToggle} onDel={onDel} />)
            }
        </div>
    );
};
 
export default PlanList;