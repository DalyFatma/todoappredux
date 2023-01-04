import { ACTIVE_TASKS, ADD_Task, ALL_TASKS, CLEAR_ALL_TODO, COMPELETED_TASK, DELETE_TASK, EDIT_TASK, FILTER, SEARCH_TASK, SHOW_TASKS } from "../constants/constTodos"
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
            export const showTasks =(payload)=>{
                return{
                    type: SHOW_TASKS,
                    payload
                }
            }