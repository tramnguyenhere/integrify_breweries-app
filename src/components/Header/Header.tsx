import React from 'react'
import { Link } from '@mui/material'

import './Header.scss'

const Header = () => {
  return (
    <header>
      <Link className='header__link' id='brand-name' href='/'>The Coffee Beans</Link>
      <nav>
        <Link className='header__link' href='contact'>Contact</Link>
      </nav>
    </header>
  )
}

export default Header