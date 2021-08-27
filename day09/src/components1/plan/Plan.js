import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global';
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';


const Plan = () => {
    const [plans, setPlans] = useState([])

    useEffect(() => {
        const getData = async() => {
            const res = await fetch('http://localhost:4000/plans')
            const data = await res.json()
            setPlans(data)
        }
        getData()
    }, [])

    // 생성
    const onAdd = async(form) => {
        const res = await fetch('http://localhost:4000/plans', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'            
            },
            body: JSON.stringify(form)
        })
        const data = await res.json()
        setPlans([...plans, data])
    }

    // 삭제
    const onDel = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`, {
            method: 'DELETE'
        })

        setPlans(plans.filter(plan => plan.id !== id))
    }

    // 1-1) 수정할 것을 꺼내옴
    const getPlan = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`)
        const data = await res.json()
        return data
    }

    // 1-2) 수정
    const onToggle = async(id) => { 
        const togglePlan = await getPlan(id)

        // 변경
        const updataPlan = {...togglePlan, done : !togglePlan.done}
        // 값넣기 (생성 수정할때는 헤더 필요)
        const res = await fetch(`http://localhost:4000/plans/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'            
            },
            body: JSON.stringify(updataPlan)
        })

        const data = await res.json()
        getView()
    }

    // 1-3) 수정한 것을 화면에 다시 뿌려줌
    const getView = () => {
        const config = {method: 'GET'}
        fetch('http://localhost:4000/plans/', config)
        .then(res => res.json())
        .then(res => setPlans(res))
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