import React from 'react'

const FormInput = (prop) => {
    const {setValue,label,id,...all} = prop
  return (
    <>
        <div>
            <label htmlFor="username">{label}</label>
            <input {...all} onChange={(e)=>setValue(e)}  />
        </div>
    </>
  )
}

export default FormInput