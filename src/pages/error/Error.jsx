import { Link } from 'react-router-dom'

import React from 'react'

const Error = () => {
  return (
    <div>
      <h1 className='text-center my-10 '>Opps 404 Not Found <span>Go<Link className='text-blue-500 ml-3 '>Home</Link></span></h1>
    </div>
  )
}

export default Error
