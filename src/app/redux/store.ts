import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsApi} from "../../widgets/posts/api/api-posts";

const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMidleware) => getDefaultMidleware().concat(postsApi.middleware)
    })
}
