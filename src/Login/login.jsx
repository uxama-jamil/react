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
    const [err,setError]=useState("")
    const regUrl = "http://8.222.193.61/authentication/reigster/"
    const loginUrl ="http://8.222.193.61/authentication/login/"
    const setValue = (v)=>{
        setFormValue({
            ...formValue,[v.target.name]:v.target.value
        })
    }
    
    const check = (e)=>{
        setError("")

        e.preventDefault()
        // navigate("/main",{state:{username:"lily Zoha"}})

        if(register){
            axios.post(regUrl,formValue).then(res=>{
        if(res?.data?.status){
            setRegister(false)
        }else{
            res?.data?.error && setError(res?.data?.error)
        }
        }).catch(err=>{
            setError(err?.response?.data?.message)
        })}else{
            axios.post(loginUrl,{username:formValue.username,password:formValue.password}).then((logRes)=>{
                data.updateData({username:formValue.username})
                // logRes.data.status && navigate('/main')
                console.log(logRes,data)


                
            }).catch((logErr)=>{
            setError(logErr?.response?.data?.message)

                console.log(logErr)
            })
        }
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
                {err && <span className='error'>{err}</span>}
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
