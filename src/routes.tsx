import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InnerContent from './Components/InnerContent'
import Questions from './Components/Questions'
import QuizHome from './Components/QuizHome'
import Summary from './Components/Summary'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<QuizHome />} />
      </Route>
      <Route path="questions" element={<Questions />} />
      <Route path="summary" element={<Summary />} />
    </Routes>
  );
}

export default MainRoutes
