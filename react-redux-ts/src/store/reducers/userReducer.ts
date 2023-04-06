import {UserActionType, UserState} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}
export const userReducer = (state: UserState = initialState, action: UserActionType): UserState => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {...state, loading: true}
        case 'FETCH_USERS_SUCCESS':
            return {...state, loading: false, users: action.payload}
        case 'FETCH_USERS_ERROR':
            return {...state, loading: false, error: action.payload}
        default:
            return state

    }
}
// Action Creators
export const fetchUsersAC = () => ({type: 'FETCH_USERS' as const})
export const fetchUsersSuccessAC = (users: Array<any>) => ({type: 'FETCH_USERS_SUCCESS' as const, payload: users})
export const fetchUsersErrorAC = (error: string) => ({type: 'FETCH_USERS_ERROR' as const, payload: error})
