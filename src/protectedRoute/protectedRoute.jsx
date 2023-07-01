import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const isUserAuthentic = false
  return (
    <>
        {isUserAuthentic ? <Outlet/> : <Navigate to='/login'/>}
    </>
  )
}

export default ProtectedRoute