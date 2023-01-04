import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editTask } from '../../redux/actions/todosActions';
import { AiFillEdit } from 'react-icons/ai'

function EditTask() {
const dispatch=useDispatch()
  const {idEdit}= useParams()
  const oldEdit=useSelector(state=>state.todos.find(el=>el.id==idEdit))
 const [newItem, setNewItem] = useState(oldEdit)
 const navigate= useNavigate();
const handleClick=()=>{
  if(!(newItem.description )){
    alert('Missed Field is required')
  return
}
dispatch(editTask(newItem));
navigate('/')
};

const handleSubmit=(e)=>{
    e.preventDefault()
}
  return (
    <div>
     <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
     <div class="row m-1 p-4">
        <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <AiFillEdit  style={{ color:"blue"}}/>
                <u className='title-todo'>Edit Task</u>
            </div>
        </div>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="flex_Add form-control form-control-sm border-0 add-todo-input sm-transparent rounded">
          <div className="col" >
            <div  style={{ marginBottom: "10px" }}>
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem,description:e.target.value })}
                placeholder="Edit Description"
                type="text"
                style={{ marginRight: "10px" }}
              />
              </div>
            </div>
            <div className="row m-1">
              <div className="col-auto d-flex align-items-center">
                <select 
                  className="form-select form-select-sm" aria-label=".form-select-sm example"
                  value={newItem.user}
                  onChange={(e) => setNewItem({...newItem,user:e.target.value })}
                  placeholder="Edit User"
                >
                <option selected>Select Users</option>
                  <option value="Fatma" selected>
                    Fatma
                  </option>
                  <option value="Mohamed">Mohamed</option>
                  <option value="Ali">Ali</option>
                </select>
              </div>
            </div>
            <span className="datepicker-toggle">
              <span className="datepicker-toggle-button"></span>
              <input
                className="datepicker-input"
                type="date"
                value={newItem.date}
                onChange={(e) => setNewItem({...newItem,date:e.target.value })}
                style={{ margin: "10px", padding:"2px" }}
              />
            </span>
            <div className="col-auto px-0 mx-0 mr-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                style={{padding:"4px"}}
              >
                Edit Task
              </button>
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <button
                type="button"
                className="btn"
                style={{padding:"4px"}}
              >
                <Link to="/">Cancel</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>

      
    </div>
  )
}

export default EditTask