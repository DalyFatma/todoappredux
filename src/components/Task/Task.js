import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask, filterCompletedTask } from '../../redux/actions/todosActions'

function Task({el}) {
  const dispatch=useDispatch();
  return (
    <ul class="list-group">
  <li class="list-group-item">
    <div className='flex-task'>
      <input 
      checked={el.status}
      type="checkbox"
      onClick={()=>dispatch(filterCompletedTask(el.id))}
      />
        <h1 style={{color:"black"}}>{el.description}</h1> 
        <h3 style={{color:"gray"}} > {el.user}</h3>
        <p style={{fontSize:"15px"}}><span style={{fontSize:"20px", fontWeight:"bold"}}>Deadline : </span>{el.date}</p>
        <button  style={{border:"none", background:"none"}} onClick={()=>dispatch(deleteTask(el.id))}><i className="bi bi-trash" style={{color:"red",width:"100px"}}></i></button>
       <Link to={`/edit/${el.id}`}> <button style={{border:"none", background:"none"}} ><i className="bi bi-pencil-square" style={{color:"green",width:"50%"}}></i></button></Link>  
    </div></li>
  
</ul>
    

  )
}

export default Task