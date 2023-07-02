import React from 'react'
import { useLocation } from 'react-router-dom'

const Main = () => {
    const location = useLocation()
  return (
    <div>
        <h1><strong>{location?.state?.username}</strong> has logged in...</h1>
    </div>
  )
}

export default Main