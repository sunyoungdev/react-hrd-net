import React, { useState } from 'react';
import GlobalStyle from '../styled/Global';
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
import data from './data'


const Plan = () => {
    const [plans, setPlans] = useState(data)

    const onAdd = (form) => {
        form.id = Math.random() * 1000000000
        setPlans([...plans, form])
    }
    const onDel = (id) => {
        setPlans(plans.filter(plan => plan.id !== id))
    }
    const onToggle = (id) => {
        setPlans(plans.map(plan => plan.id === id ? 
                                    {...plan, done:!plan.done} : plan))
    }

    return (
        <div>
            <GlobalStyle />
            <PlanAdd onAdd={onAdd} />
            <PlanList plans={plans} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Plan;