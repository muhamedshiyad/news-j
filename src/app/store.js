import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/login'

export default configureStore({
  reducer: {
    login: loginReducer
  }
})
