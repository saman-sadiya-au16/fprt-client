import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    debug: true,
    storage, 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunkMiddleware, createLogger()))
)

export const persistor = persistStore(store);

export { store }