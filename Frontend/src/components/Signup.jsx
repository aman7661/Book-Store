import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
function Signup() {
  const location= useLocation()
  const navigate=useNavigate()
  const from= location.state?.from?.pathname||"/"
  
  const {
      register,
      handleSubmit,
      
      formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          
          toast.success("Signup Successfully")
          navigate(from,{replace:true})
          setTimeout(() => {
            window.location.reload()
          }, 1000);
          
         
          
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{

        if(err.response){

        
        console.log(err)
        setTimeout(() => {
          toast.error("Error:"+ err.response.data.message)
        }, 1000);
        
        }
      })
      
    }
  return (
    <div className="flex h-screen items-center justify-center ">
      
    <div className="w-[600px]">
<div className="modal-box">
  <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    {/* if there is a button in form, it will close the modal */}
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Link to="/">✕</Link></button>
  
  <h3 className="font-bold text-lg">Signup</h3>
  <div>
    <span  className="w-80 mt-5 py-2.5 border-rounded">Name</span>
    <br/>
    <input type="text" placeholder="Enter your Name" className="w-80 py-2.5 border-rounded outline-none" {...register("fullname", { required: true })}></input>
    <br/>
    {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
  </div>
  <div>
    <span  className="w-80 mt-5 py-2.5 border-rounded">Email</span>
    <br/>
    <input type="email" placeholder="Enter your email" className="w-80 py-2.5 border-rounded outline-none" {...register("email", { required: true })}></input>
    <br/>
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
  </div>
  <div>
    <span  className="w-80 mt-5 py-2.5 border-rounded">Password</span>
    <br/>
    <input type="password" placeholder="Enter your Password" className="w-80 py-2.5 border-rounded outline-none" {...register("password", { required: true })}></input>
    <br/>
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
  </div>
  
  <div className="flex justify-around">
    <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300"> Signup </button>
     <p>Have Account? <button className="underline text-blue-500 hover:text-color-700 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login
    </button>
    <Login/>
    </p>
  </div>
  </form>
</div>
</div>
  </div>
  )
}

export default Signup
