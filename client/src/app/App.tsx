// import { useEffect, useState } from 'react'
// import chatStore from './store/chatsStore'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
