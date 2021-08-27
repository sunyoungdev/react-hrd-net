// 액션생성
const INSERT = 'todos/INSERT'
const REMOVE = 'todos/REMOVE'
const CHANGE_INPUT = 'todos/CHANGE_INPUT'

// 액션함수 내보내기
export const insert = (text) => ({type: INSERT, list:{id: no++, text}})
export const remove = (id) => ({type: REMOVE, id})
export const changeInput = (text) => ({type: CHANGE_INPUT, text})

// 리듀서
let no = 3  // 순수함수영역이라 useRef 대신 let
const initialState = {
    text: '아무말',
    todos: [
        {id: 1, text: '김선영'},
        {id: 2, text: '전정국'},
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INSERT:
            return {
                ...state, 
                todos: [...state.todos, action.list]
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case CHANGE_INPUT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}
export default reducer