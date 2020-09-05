import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import {TodoListStore} from './components/TodoList'
import {TodoFilterStore} from './components/TodoFilter'
import {AddTodoForm} from './components/AddTodoForm'

function App() {
  return (
    <Provider store={store}>
      <TodoFilterStore />
      <TodoListStore />
      <AddTodoForm />
    </Provider>
  );
}

export default App;
