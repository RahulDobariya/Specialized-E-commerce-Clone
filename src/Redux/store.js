import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ })


const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }
if (window.Cypress) {
        window.reduxStore = store;
}