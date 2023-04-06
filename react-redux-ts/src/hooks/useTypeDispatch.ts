import {RootState} from "../store/reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";


export type ThunkAppDispatchType = ThunkDispatch<RootState, any, AnyAction>
export const useTypeDispatch = () => useDispatch<ThunkAppDispatchType>()
