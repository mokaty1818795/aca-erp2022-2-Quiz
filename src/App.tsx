import React from 'react'
import Sidebar from './Components/Sidebar'
import Topnav from './Components/Topnav'
import MainRoutes from './routes'

function App() {
  return (
    <>
      <Topnav />
      <Sidebar />
      <MainRoutes />
    </>
  )
}

export default App
