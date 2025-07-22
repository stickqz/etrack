import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import recordsReducer from './recordsSlice';
import billsReducer from './billsSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        records: recordsReducer,
        bills: billsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
