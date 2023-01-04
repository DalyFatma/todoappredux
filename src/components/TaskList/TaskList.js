import React from 'react'
import { useSelector } from 'react-redux';
import Task from '../Task/Task'

function TaskList() {
  const search=useSelector(state=>state.searchText)
    const todos=useSelector(state=> state.todos).filter(el=>el.description.toLowerCase().includes(search.trim()))
    
    const filter=useSelector(state=>state.filter)
  return (
    <div >
        {filter =='ALL'?todos.map(el=><Task key={el.id} el={el}/>):filter=='completed'?todos.filter(el=>el.status==true).map(el=><Task key={el.id} el={el}/>):todos.filter(el=>el.status==false).map(el=><Task key={el.id} el={el}/>)}
    </div>
  )
}

export default TaskList