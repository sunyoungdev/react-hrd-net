// 액션생성
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

// 액션생성함수 내보내기
export const changeColor = (color) => ({type: CHANGE_COLOR, color})

// 리듀서(순수함수)
// 초기값 지정
const initialState = {
    color: 'skyblue'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_COLOR:
            return{
                color: action.color
            }
        default:
            return state
    }
}
export default reducer