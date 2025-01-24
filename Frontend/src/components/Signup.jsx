import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
      register,
      handleSubmit,
      
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);
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
    <input type="text" placeholder="Enter your Name" className="w-80 py-2.5 border-rounded outline-none" {...register("name", { required: true })}></input>
    <br/>
    {errors.name && <span className="text-sm text-red-500">This field is required</span>}
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
