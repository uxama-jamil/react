import React, { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import FormInput from '../formInput/formInput'
import { useDataContext } from '../Context/context'

import axios from 'axios'
const Login = () => {
    const data = useDataContext()
    const navigate = useNavigate()
    const [formValue,setFormValue]=useState({username:'',password:'',email:""})
    const [register,setRegister]=useState(false)
    const regUrl = "http://8.222.193.61/authentication/reigster/"
    const loginUrl ="http://8.222.193.61/authentication/dj-rest-auth/login/"
    const setValue = (v)=>{
        setFormValue({
            ...formValue,[v.target.name]:v.target.value
        })
    }
    
    const check = (e)=>{
        console.log("first")
        // e.preventDefault()
        // navigate("/main",{state:{username:"lily Zoha"}})

        // const res = axios.post(regUrl,formValue).then(res=>console.log(res)).catch(err=>console.log(err))
        // axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>console.log(res))
        
        // return formValue.password === "07b070ee" ? navigate('/main',{state:{username:formValue.username,password:formValue.password}}) : null
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
        },
        {
            id:3,
            name:"email",
            label:"Email",
            type:"text",
            placeholder:"Email"
        }
    ]
    const handleRegister = ()=>{
        setRegister(!register)
    }
  return (
    <div>
        <div className="login-container">
            <form className="form" onSubmit={(e)=>check(e)}>
                {input.map((res)=>{
                    return res.name !=="email" && <>
                        <FormInput key={res.id} {...res} value={formValue[res.name]} setValue={setValue} />
                    </>
                })}
                {register && <FormInput key={input[input.length-1].id} {...input[input.length-1]} value={formValue[input[input.length-1].name]} setValue={setValue} />}
                <div className="navs">
                <span onClick={()=>handleRegister()}>{ register? "Back" :  "Register"}</span>

                <button  >{register ? "Register" : "Login"}</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login
