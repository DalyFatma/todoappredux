import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { searchTask } from '../../redux/actions/todosActions'

function SearchT() {
const dispatchSearch=useDispatch()
  return (
    <>
        <div className='search-flex'>
        <label > Search for task :</label>
        <input style={{ width:"20%"}}  
        className="form-control  border-0 add-todo-input sm-transparent rounded inputText" 
        onChange={(e)=>dispatchSearch(searchTask(e.target.value))} 
        placeholder="Search for task.."/>
       </div>
    </>
  )
}

export default SearchT