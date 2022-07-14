import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InnerContent from './Components/InnerContent'
import QuizHome from './Components/QuizHome'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="quizhome" />} />
        <Route path="quizhome" element={<QuizHome />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes
