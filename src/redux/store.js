import { createStore,applyMiddleware,compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/* const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export default store */

//storage for persist state
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['navigation']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store=createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)))
export const persistor=persistStore(store)




