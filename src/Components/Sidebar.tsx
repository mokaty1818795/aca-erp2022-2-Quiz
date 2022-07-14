import React, { ReactText } from 'react'
import {  Stack, Link, FlexProps, Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { HiBell, HiTemplate, HiHand } from 'react-icons/hi'

interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: HiTemplate },
  { name: 'Notifications', icon: HiBell },
  { name: 'Support', icon: HiHand },
]

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#696F79',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const Sidebar = () => {
  return (
    <Flex px="2rem" py="1rem" align="flex-start" position="fixed">
      <Stack>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Stack>
    </Flex>
  )
}

export default Sidebar
