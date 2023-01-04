import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/todosActions";
import 'bootstrap/dist/css/bootstrap.min.css';

function AddTask() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newDate, setNewDate] = useState();

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleChangedate = (e) => {
    setNewDate(e.target.value);
  };
  const handleChangeUser = (e) => {
    setNewUser(e.target.value);
  };

  return (
    <>
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="flex_Add form-control form-control-sm border-0 add-todo-input sm-transparent rounded">
          <div className="col" >
            <div  style={{ marginBottom: "10px" }}>
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                value={newTodo}
                onChange={handleChange}
                type="text"
                placeholder="✍️ Add Todost .."
                style={{ marginRight: "10px" }}
              />
              </div>
            </div>
            <div className="row m-1">
              <div className="col-auto d-flex align-items-center">
                <select 
                  className="form-select form-select-sm" aria-label=".form-select-sm example"
                  value={newUser}
                  onChange={handleChangeUser}
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
                type="date"
                className="datepicker-input"
                onChange={handleChangedate}
                value={newDate}
                style={{ margin: "10px", padding:"2px" }}
              />
            </span>
            <div className="col-auto px-0 mx-0 mr-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch(addTask(newTodo, newUser, newDate))}
                style={{padding:"4px"}}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-2 mx-4 border-black-25 border-bottom"
        style={{ marginBottom: "15px" }}
      >
        
      </div>
    </>
  );
}

export default AddTask;
