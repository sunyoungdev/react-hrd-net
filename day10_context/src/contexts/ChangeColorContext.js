 import React, { createContext, useState } from 'react';

 // 관리자 생성
 export const ChangeColorContext = createContext()
 
 // 이름이 같을 수 없으니 임의로 생성(공급자 역할)
 const ChangeColorProvider = (props) => {
    const [color, setColor] = useState('yellow')

    const onColor = (text) => {
        setColor(text)
    }

     return (
         <ChangeColorContext.Provider value={{color, onColor}}>
             {/* 자식에게 전달 */}
             {props.children}
         </ChangeColorContext.Provider>
     );
 };
 
 export default ChangeColorProvider;