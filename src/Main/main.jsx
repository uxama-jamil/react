import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDataContext } from '../Context/context'

const Main = () => {
    // const location = useLocation()
    const data = useDataContext()

  return (
    <div>
        <h1><strong>{data.username}</strong> has logged in...</h1>
    </div>
  )
}

export default Main