import React from 'react'
import UserList from "./components/UserList";
import Todolist from "./components/Todolist";

function App() {
    return <div className = 'App'>
        <UserList />
        <hr/>
        <Todolist/>
    </div>
}

export default App
