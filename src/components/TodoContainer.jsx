import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import { useState } from 'react'

const TodoContainer = () => {

    const [activityArr,setActivityArr]=useState([
        {
            id:1,
            activity:"List your Activity"
        },
    ])

    return (
        <div className='flex gap-5 flex-wrap'>
            <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
    )
}

export default TodoContainer
