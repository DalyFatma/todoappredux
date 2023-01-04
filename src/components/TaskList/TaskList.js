import React from 'react'
import { useSelector } from 'react-redux';
import Task from '../Task/Task'

function TaskList() {
 
    const todos=useSelector(state=> state.todos);
    const search=useSelector(state=>state.searchText)
  return (
    <div >
        {todos.filter(el=>el.description.toLowerCase().includes(search.trim())).map(el=> <Task key={el.id} el={el} />)}
    </div>
  )
}

export default TaskList