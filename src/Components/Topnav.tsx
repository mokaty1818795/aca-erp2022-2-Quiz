import React from 'react'
import {
  HStack,
  Link,
  Avatar,
  Button,
  Input,
  InputGroup,
} from '@chakra-ui/react'

import avatarImg from '../Assets/avatarImg.svg'
const Topnav = () => {
  return (
    <>
      <HStack
        justifyContent="space-between"
        px="4rem"
        py="1rem"
        alignItems="center"
      >
        <HStack>
          <Link fontSize="1.875rem" fontWeight={800} color="#696F79">
            QuizTime
          </Link>
        </HStack>

        <HStack spacing="400px" alignContent="center">
          <InputGroup>
            <Input
              type="text"
              placeholder="Search"
              size="lg"
              textAlign="center"
            />
          </InputGroup>
          <Button
            bg="#8692A6"
            color="#fff"
            px="4rem"
            py="1.5rem"
            borderRadius="30px"
            fontSize="1.25rem"
          >
            Start Quiz
          </Button>
        </HStack>

        <HStack alignItems="center" spacing={2}>
          <Avatar src={avatarImg} />
          <Link>Mokati</Link>
        </HStack>
      </HStack>
    </>
  )
}

export default Topnav
