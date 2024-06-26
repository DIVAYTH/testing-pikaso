import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./app/redux/store";
import { Provider } from 'react-redux'
import App from './app/App';
import './app/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store=setupStore()

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
