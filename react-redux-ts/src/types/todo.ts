import {fetchUsersAC, fetchUsersErrorAC, fetchUsersSuccessAC} from "../store/reducers/userReducer";

export type UserActionType =
    | ReturnType<typeof fetchUsersAC>
    | ReturnType<typeof fetchUsersSuccessAC>
    | ReturnType<typeof fetchUsersErrorAC>

export type UserState = {
    users: any[]
    loading: boolean
    error: null | string
}
