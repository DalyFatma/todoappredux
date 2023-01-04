import React from 'react'
import { useDispatch } from 'react-redux';
import { clearAlltodo, searchTask } from '../../redux/actions/todosActions';

function NavBar() {
  const dispatch =useDispatch();
  return (    
    <div className='row m-1 p-3 flex-delete'>
      <div className="col-auto px-0 mx-0 mr-2">
         <button style={{marginLeft:"45px"}} type="button" className="btn btn-primary" onClick={()=>dispatch(clearAlltodo())}>Delete All</button>
      </div>
      
    </div>
  )
}

export default NavBar