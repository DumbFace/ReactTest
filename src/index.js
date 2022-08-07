import React from 'react';
import ReactDOM from "react-dom";
import TodoApp from './component/TodoApp';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    , document.getElementById("root"));
