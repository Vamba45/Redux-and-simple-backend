import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';
import Application from './app.jsx';
import './styles/style.scss';

import { store } from './store/index.js';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// // получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <Provider store={store}>
        <Application/>
    </Provider>
);