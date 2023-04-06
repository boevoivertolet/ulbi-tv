import {fetchUsersAC, fetchUsersErrorAC, fetchUsersSuccessAC} from "../reducers/userReducer";
import {UserActionType} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            dispatch(fetchUsersAC())
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch(fetchUsersSuccessAC(response.data))
            }, 1500)

        } catch (e) {
            dispatch(fetchUsersErrorAC('Произошла ошибка при загрузке пользователей'))
        }
    }
}
