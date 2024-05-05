import { configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/user/userAuthApi';
import { pharmacyApi } from '../services/pharmacy/pharmacyApi';
import { medicineApi } from '../services/medicine/medicineApi';
import { authSlice } from '../features/user/authSlice';
import { searchSlice } from '../features/user/searchSlice';


export const store =  configureStore({
    reducer : {
        search: searchSlice.reducer, 
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        [pharmacyApi.reducerPath]: pharmacyApi.reducer,
        [medicineApi.reducerPath]: medicineApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        userAuthApi.middleware,
        pharmacyApi.middleware,
        medicineApi.middleware,
    )
})
setupListeners(store.dispatch)