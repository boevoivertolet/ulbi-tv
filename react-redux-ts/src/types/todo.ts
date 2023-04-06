import {fetchUsers, fetchUsersError, fetchUsersSuccess} from "../store/reducers/userReducer";

export type UserActionType =
    | ReturnType<typeof fetchUsers>
    | ReturnType<typeof fetchUsersSuccess>
    | ReturnType<typeof fetchUsersError>

export type UserState = {
    users: any[]
    loading: boolean
    error: null | string
}
