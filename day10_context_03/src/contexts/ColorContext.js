import React, { createContext, useContext, useState } from 'react';

// 관리자 생성(관리자 안에는 Provider가 들어있음)
// 관리자, 공급자 두개 다 export 되어야 함
const ColorContext = createContext()

const ColorProvider = (props) => {
    // color의 모든 행동과 상태값은 여기에
    const [color, setColor] = useState('green')
    const onRed = () => {setColor('red')}
    const onPink = () => {setColor('pink')}
    const onLime = () => {setColor('lime')}
    const onTomato = () => {setColor('tomato')}
    const onSkyblue = () => {setColor('skyblue')}

    return (        
        // 관리자 안에 있는 것들을 공급해라
        // value => 자식들에게 전달
        <ColorContext.Provider value={{color, onRed, onPink, onLime, onTomato, onSkyblue}}>
            {/* 자식들(color)을 인식해라 */}
            {/* <Color /> */}
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;

// 사용자 정의 훅 (custom hook)
export const useColor = () => {
    const {color, onRed, onPink, onLime, onTomato, onSkyblue} = useContext(ColorContext)
    return {color, onRed, onPink, onLime, onTomato, onSkyblue}
}