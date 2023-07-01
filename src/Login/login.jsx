import React, { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import FormInput from '../formInput/formInput'

const Login = () => {
    const navigate = useNavigate()
    const [formValue,setFormValue]=useState({username:'',password:''})
    const setValue = (v)=>{
        setFormValue({
            ...formValue,[v.target.name]:v.target.value
        })
    }
    
    const check = ()=>{
        return formValue.password === "07b070ee" ? navigate('/main',{state:{username:formValue.username,password:formValue.password}}) : null
    }
    const input =[
        {   
            id:1,
            name:"username",
            label:"Username",
            type:"text",
            placeholder:"Username"
        },
        {
            id:2,
            name:"password",
            label:"Password",
            type:"password",
            placeholder:"Password"
        }
    ]
  return (
    <div>
        <div className="login-container">
            <form className="form" onSubmit={()=>check()}>
                {input.map((res)=>{
                    return<>
                        <FormInput key={res.id} {...res} value={formValue[input.name]} setValue={setValue} />
                    </>
                })}
                <button >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
