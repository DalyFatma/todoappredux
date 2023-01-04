import { ADD_Task, CLEAR_ALL_TODO, DELETE_TASK, EDIT_TASK, FILTER, SEARCH_TASK } from "../constants/constTodos"

const initialState={
    todos:[],
    text:"",
    searchText:"",
    isDone:true
} ;
export const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_Task:
            return{
                ...state, todos:[...state.todos,{...action.payload, id:state.todos.length}]}
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
                ...state, todos:state.todos.map(el=>el.id==action.payload?{...el,isDone:!el.isDone}:el)
            }
    
        default:
            return state;
    }
    }