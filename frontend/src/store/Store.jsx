import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import TemplatesSlice from './slice/TemplateSlice';

const Store = configureStore({
    reducer:{
        UserSlice,
        TemplatesSlice
    }
})


export default Store