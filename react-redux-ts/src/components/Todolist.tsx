import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const Todolist: React.FC = () => {
    const {limit, loading, todos, page, error,} = useTypeSelector(state => state.todos)

    const {fetchTodos, setTodoPageAC} = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {
                todos.map(t => <div key = {t.id}>{t.id} - {t.title}</div>)
            }
            <div style = {{display: 'flex'}}>
                {
                    pages.map(p => <div onClick = {() => setTodoPageAC(p)}  style = {{border: p === page ? '2px solid green' : '1px solid grey'}}>{p}</div>)
                }
            </div>

        </div>
    );
};

export default Todolist;
