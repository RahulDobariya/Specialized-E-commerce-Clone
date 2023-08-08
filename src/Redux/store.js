import { legacy_createStore as createStore } from 'redux'

const store = createStore();

export { store };
if (window.Cypress) {
        window.reduxStore = store;
}