import {fetchUsersAC, fetchUsersErrorAC, fetchUsersSuccessAC} from "../store/reducers/userReducer";
import {fetchTodoAC, fetchTodoErrorAC, fetchTodoSuccessAC} from "../store/reducers/todoReducer";
import {setTodoPageAC} from "../store/action-creators/todo";

export type TodoState = {
    todos: Array<any>
    loading: boolean
    error: null | string
    page: number
    limit: number
}
export type TodoActionType =
    | ReturnType<typeof fetchTodoAC>
    | ReturnType<typeof fetchTodoSuccessAC>
    | ReturnType<typeof fetchTodoErrorAC>
    | ReturnType<typeof setTodoPageAC>
