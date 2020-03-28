import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'reduxStore'

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={store}>
            <div>asdfasdfa</div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
