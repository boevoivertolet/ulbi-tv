import {fetchTodoAC, fetchTodoErrorAC, fetchTodoSuccessAC} from "../reducers/todoReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {TodoActionType} from "../../types/todo";


export const fetchTodos = (page: number = 1, limit:number = 10) => {
    return async (dispatch: Dispatch<TodoActionType>) => {
        try {
            dispatch(fetchTodoAC())
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params:{_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch(fetchTodoSuccessAC(response.data))
            }, 1500)

        } catch (e) {
            dispatch(fetchTodoErrorAC('Произошла ошибка при загрузке списка дел'))
        }
    }
}
export const setTodoPageAC = (page: number) => ({type: 'SET_TODO_PAGE' as const, payload: page})
