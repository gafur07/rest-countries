import { rootReducer } from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
	reducer: rootReducer,
	devTools: true
});



export type TypeRootState = ReturnType<typeof store.getState>