import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';
import Application from './app.jsx';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

const defaultState = {
    cash: 5
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
            
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}

            default:
                return state
    }
}

const store = createStore(reducer)

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// // получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <Provider store={store}>
        <Application/>
    </Provider>
);