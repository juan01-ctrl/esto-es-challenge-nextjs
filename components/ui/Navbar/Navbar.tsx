import React from 'react'
import Image from 'next/image'
import { Nav } from './NavbarElements'
import logo from '../../../public/logo.webp'

export const Navbar = () => {
  return (
    <Nav>
        <Image src={logo} alt='logo' width={105} height={55}/>
    </Nav>
  )
}
