import React, { useState } from 'react';
import { PlanForm } from '../styled/planstyle'

const PlanAdd = ({onAdd}) => {
    const [form, setForm] = useState({
        text:'',
        day:'',
        done:false
    })

    const {text, day, done} = form

    const changeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const change = (e) => {
        const {checked, name} = e.target
        setForm({
            ...form,
            [name]: checked
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text || !day) return
        onAdd(form)
        setForm({
            text: '', day: '', done: false
        })
    }

    return (
        <PlanForm onSubmit={onSubmit}>
            <div>
                <label>내용</label>
                <input type="text" value={text} name="text" onChange={changeInput} />

            </div>
            <div>
                <label>일시</label>
                <input type="text" value={day} name="day" onChange={changeInput} />
                
            </div>
            <div>
                <label>중요</label>
                <input type="checkbox" checked={done} name="done" onChange={change} />                
            </div>
            <button>저장</button>
        </PlanForm>
    );
};

export default PlanAdd; 