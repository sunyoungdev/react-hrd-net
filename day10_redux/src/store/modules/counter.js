// 액션생성함수
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const RESET = 'counter/RESET'

// 액션생성함수 내보내기
export const increment = () => ({type:INCREMENT})
export const decrement = () => ({type:DECREMENT})
export const reset = () => ({type:RESET})

// 리듀서
const initialState = {count : 0}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count -1
            }
        case RESET:
            return {
                count: 0
            }
        default:
            return state
    }
}
export default reducer