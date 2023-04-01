import {configureStore} from "@reduxjs/toolkit"

import AuthReducer from "./features/authSlice"
import store from "./store"

export default configureStore({
    reducer:{
        auth:AuthReducer
    },
})
