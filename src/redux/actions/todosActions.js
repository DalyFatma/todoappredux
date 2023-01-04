import { ADD_Task, CLEAR_ALL_TODO, DELETE_TASK, EDIT_TASK, FILTER, SEARCH_TASK } from "../constants/constTodos"
let nextTodoId = 0;
export const addTask=(newTodo,newUser,newDate)=>{
return{
    type:ADD_Task,
    payload:{
        description: newTodo,
        user:newUser,
        date:newDate,
        id:nextTodoId++
    }
}
}
export const searchTask=(textSearch)=>{
    return{
        type:SEARCH_TASK,
        payload:textSearch
    }
}

export const editTask=(newItem)=>{
    return{
        type:EDIT_TASK,
        payload:newItem
    }
    
    }
    export const deleteTask=(idDelete)=>{
        return{
            type:DELETE_TASK,
            payload:idDelete
        }
        
        }
        export const clearAlltodo = () => {
            return {
              type: CLEAR_ALL_TODO,

            };
          };
        export const filterCompletedTask=(idDone)=>{
            return{
                type:FILTER,
                payload:idDone
            }
        }