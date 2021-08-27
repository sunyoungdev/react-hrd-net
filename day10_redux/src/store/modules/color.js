// 액션 생성(별칭)
const TOMATO = 'color/TOMATO'
const SKYBLUE = 'color/SKYBLUE'
const HOTPINK = 'color/HOTPINK'

// 액션 생성함수 내보내기
export const tomato = () => ({type:TOMATO}) 
export const skyblue = () => ({type:SKYBLUE})
export const hotpink = () => ({type:HOTPINK})

// 리듀서 만들기(순수함수)
const initialState = {color: 'orange'}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case TOMATO: 
            return {
                color: 'tomato'
            }
        case SKYBLUE:
            return {
                color: 'skyblue'
            }
        case HOTPINK:
            return {
                color: 'hotpink'
            }
        default:
            return state
    }
}

export default reducer