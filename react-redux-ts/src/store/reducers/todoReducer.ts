import {TodoActionType, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state: TodoState = initialState, action: TodoActionType): TodoState => {
    switch (action.type) {
        case 'FETCH_TODOS':
            return {...state, loading: true}
        case 'FETCH_TODOS_SUCCESS':
            return {...state, loading: false, todos: action.payload}
        case 'FETCH_TODOS_ERROR':
            return {...state, loading: false, error: action.payload}
        case 'SET_TODO_PAGE':
            return {...state, page: action.payload}
        default:
            return state
    }

}
// Action Creators
export const fetchTodoAC = () => ({type: 'FETCH_TODOS' as const})
export const fetchTodoSuccessAC = (todos: Array<any>) => ({type: 'FETCH_TODOS_SUCCESS' as const, payload: todos})
export const fetchTodoErrorAC = (error: string) => ({type: 'FETCH_TODOS_ERROR' as const, payload: error})
