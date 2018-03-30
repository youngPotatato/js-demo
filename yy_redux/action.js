export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const Visibility = {
  SHOW_ALL : 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}


export function addTodo(str){
 return {type:ADD_TODO,str} ;
}

export function toggleTodo(index){
  return {type:toggleTodo,index};
}

export function setVisibilityFilter(filter){
  return {type:SET_VISIBILITY_FILTER,filter};
}
