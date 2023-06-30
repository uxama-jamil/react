import React, { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [formValue,setFormValue]=useState({username:'',password:''})
    const setValue= (v,name)=>{
        setFormValue((val)=>{
            return {...val,[name]:v.target.value}
        })
    }
    const check = ()=>{
        return formValue.password === "07b070ee" ? navigate('/main',{state:{username:formValue.username,password:formValue.password}}) : null
    }
  return (
    <div>
        <div className="login-container">
            <div className="form">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="" id="username" value={formValue.username} onInput={(e)=>setValue(e,"username")} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" value={formValue.password} onInput={(e)=>setValue(e,"password")}/>
                </div>
                <button onClick={()=>check()}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login
