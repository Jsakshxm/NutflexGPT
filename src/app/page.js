"use client"
import React from 'react'
import Login from './components/Login'
import { Provider } from 'react-redux'
import store from './utils/store'
const page = () => {
  return (
   <Provider store={store}> <div><Login></Login></div> </Provider>
  )
}

export default page