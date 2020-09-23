import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {Router} from "react-router";
import {applyMiddleware, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer"
import {Provider} from 'react-redux';

export const customHistory = createBrowserHistory();

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={customHistory}>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
