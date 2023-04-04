import {configureStore} from "@reduxjs/toolkit"

import AuthReducer from "./features/authSlice"
import store from "./store"
import TourReducer from "./features/tourSlice"
export default configureStore({
    reducer:{
        auth:AuthReducer,
        tour: TourReducer,
    },
})
