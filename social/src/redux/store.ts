import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/slice'
import postReducer from '../redux/post/slice'


const store = configureStore({
  reducer: {
    Auth: authReducer,
    Post: postReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;