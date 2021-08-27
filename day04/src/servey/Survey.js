import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {
    // step 넘어가기
    const [step, setStep] = useState(1)

    // 상태값
    const [form, setForm] = useState({
        username: '',
        age: '',
        addr: '',
        tel: '',
        occupation: '',
        email: '',
        sex: '',
        interests: ''
    })

    // 비구조할당
    const {username, age, addr, tel, occupation, email, sex, interests} = form

    const onText = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onNext = () => {
        setStep(step + 1)
    }

    const onPrev = () => {
        setStep(step - 1)
    }

    return (
        <div className="wrap">
            {step === 1 && <SurveyStep1 username={username} age={age} addr={addr} tel={tel} onText={onText} onNext={onNext} />}

            {step === 2 && <SurveyStep2 occupation={occupation} email={email} sex={sex} interests={interests} onText={onText} onNext={onNext} onPrev={onPrev} />}

            {/*  
                <SurveyStep2 
                    {...form}   // 키값만 전달하기
                    form={form} // 객체 그대로 전달하기(비구조할당 필요)
                />
             */}

            {step === 3 && <SurveyStep3 form={form} onNext={onNext} onPrev={onPrev} />}

            {step === 4 && <SurveyStep4 
                // username={username} 
                {...form}
            />}
            {/* <SurveyStep1 /> */}
            {/* <SurveyStep2 /> */}
            {/* <SurveyStep3 /> */}
            {/* <SurveyStep4 /> */}
        </div>
    );
};

export default Survey;