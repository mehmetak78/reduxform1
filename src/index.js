import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//import "materialize-css/dist/css/materialize.min.css";


import {Provider} from "react-redux";

import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";


// For testing without using Postman
// Then you will be able to use axios in Browser Console.
import axios from "axios";
window.axios = axios;


const store = createStore(reducers, {}, compose(
    applyMiddleware(reduxThunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()      // For Google Chrome extension. Safari fails
    window.devToolsExtension ? window.devToolsExtension() : f => f                  // For Google Chrome extension. Safari OK
));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));

console.log("Environment is :", process.env.NODE_ENV);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

