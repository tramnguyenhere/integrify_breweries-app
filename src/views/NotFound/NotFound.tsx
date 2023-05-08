import React from 'react'

import BackToHomeLink from '../../components/BackToHomeLink/BackToHomeLink'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>404 Not Found</h1>
          <p>Sorry, the page you're looking for could not be found.</p>
          <BackToHomeLink />
    </div>
  )
}

export default NotFound