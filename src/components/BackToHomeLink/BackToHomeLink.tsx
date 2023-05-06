import React from 'react'
import { Link } from 'react-router-dom'

import './BackToHomeLink.scss'

const BackToHomeLink = () => {
  return (
    <Link className='link' to='/'>
        Back to Home
    </Link>
  )
}

export default BackToHomeLink