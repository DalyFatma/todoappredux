import React from 'react'
import { useDispatch } from 'react-redux'
import { activeTasks, allTasks, completedTasks, showTasks } from '../../redux/actions/todosActions'

function Filter() {
  const dispatch=useDispatch()
  return (
    <>
      <div class="row m-1 p-3 px-5 justify-content-end">
        <div class="col-auto d-flex align-items-center">
            <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
            <select class="custom-select custom-select-sm btn my-2" onChange={(e)=>dispatch(showTasks(e.target.value))}>
                <option
                 value="ALL"
                 selected
                 > All
                </option>
                <option value="completed" >Completed</option>
                <option value="active">Active</option>
            </select>
        </div>
    </div>
    
    </>
  )

  
}

export default Filter