import { createStore } from 'redux'
import rootReducer from './reducers'

function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : null
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}

export default configureStore()
