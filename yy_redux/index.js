import {createStore} from 'redux'
import todoApp from './reducers'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  setVisibilityFilter
} from './action'


let store = createStore(todoApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
                              console.log(store.getState())
);

store.dispatch(addTodo('1st item'));
store.dispatch(addTodo('2st item'));
store.dispatch(addTodo('3st item'));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(Visibility.SHOW_COMPLETED));
unsubscribe();
