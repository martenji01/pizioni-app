import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
// import { apiSlice } from '../features/apiSlice'
import gamesReducer from './games'
// import { apiSlice } from '../features/apiSlice'
import userReducer from './user'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, persistStore,
} from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['apiProductSlice'],
}
export const rootReducers = combineReducers({
    games: gamesReducer,
    user: userReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
setupListeners(store.dispatch)
export const persistor = persistStore(store)