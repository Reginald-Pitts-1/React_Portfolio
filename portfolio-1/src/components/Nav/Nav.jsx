import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBlackBook} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><GiBlackBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><TiContacts /></a>
    </nav>
  )
}

export default Nav;