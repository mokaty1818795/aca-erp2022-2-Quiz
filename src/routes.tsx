import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InnerContent from './Components/InnerContent'
import Questions from './Components/Questions'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="questions" />} />
          <Route path="questions" element={<Questions />}/>
      </Route>
    </Routes>
  )
}

export default MainRoutes
