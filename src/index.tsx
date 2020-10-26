import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducer from 'redux-store/reducers'
import { configureStore } from '@reduxjs/toolkit'
import Root from 'pages/root'
import { ResetStyles } from './reset'

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={configureStore({ reducer })}>
            <ResetStyles />
            <Root />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
