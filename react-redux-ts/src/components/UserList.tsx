import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useTypeDispatch} from "../hooks/useTypeDispatch";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypeSelector(state => state.users)
    const dispatch = useTypeDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                users.map(u => <div>{u.name}</div>)
            }
        </div>
    );
};

export default UserList;
