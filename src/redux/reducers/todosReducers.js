import { ACTIVE_TASKS, ADD_Task, ALL_TASKS, CLEAR_ALL_TODO, COMPELETED_TASK, DELETE_TASK, EDIT_TASK, FILTER, SEARCH_TASK, SHOW_TASKS } from "../constants/constTodos"

const initialState={
    todos:[],
    text:"",
    searchText:"",
    filter:"ALL",
    search:""
} ;
export const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_Task:
            return{
                ...state, todos:[...state.todos,{...action.payload, id:state.todos.length,status:false}]}
        case EDIT_TASK :
            return{...state, todos:state.todos.map(el=>el.id==action.payload.id?{...el,...action.payload}:el),
            }
        case SEARCH_TASK:
            return{
                ...state, searchText:action.payload
            }

        case DELETE_TASK:
            return {
                ...state, todos: state.todos.filter(el=>el.id!==action.payload)

            }
        case CLEAR_ALL_TODO:
            return {
                ...state,
                todos: [],
            };
        case FILTER:
            return{
                ...state, todos:state.todos.map(el=>el.id==action.payload?{...el,status:!el.status}:el)
            }
            case SHOW_TASKS:
                return {
                  ...state,filter:action.payload
                  
                };
    
        default:
            return state;
    }
    }