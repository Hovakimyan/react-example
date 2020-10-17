import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'reduxStore'
import Root from 'pages/root'
import { ResetStyles } from './reset'

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={store}>
            <ResetStyles />
            <Root />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
