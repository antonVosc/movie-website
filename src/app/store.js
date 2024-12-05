import { configureStore } from '@reduxjs/toolkit';
import currentQueryReducer from '../features/currentQuerySlice';
import { kinopoiskApi } from '../services/kinoposkApi';

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
        currentQuery: currentQueryReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(kinopoiskApi.middleware),
});