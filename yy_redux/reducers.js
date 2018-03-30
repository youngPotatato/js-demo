import {combineReducers} from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  Visibility
} from "./action";


const {SHOW_ALL} = Visibility


function visibilityFilter(state = SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }

}


function todos(state=[],action){
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text:action.text,
          completed:false
        }
      ];
    case TOGGLE_TODO:
      return state.map((item,index)=>{
        if(index === action.index)
          return {item, completed:!item.completed};
    });
    default:
      return state;
  }
  const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
  })
  export default todoApp
}