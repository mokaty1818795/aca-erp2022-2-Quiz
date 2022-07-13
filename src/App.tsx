import React from 'react'
import Sidebar from './Components/Sidebar'
import Topnav from './Components/Topnav'
import QuizHome from './Components/QuizHome'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Topnav />
      <Flex direction="row" justifyContent="space-between">
        <Sidebar />
        <QuizHome />
      </Flex>
    </>
  )
}

export default App
