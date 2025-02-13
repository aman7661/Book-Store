import React, {useEffect, useState} from 'react'

//import list from '../assets/list.json'
import Cards from './cards'
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error){
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have {" "}
          <span className="text-pink-500"> Here! {":)"}</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nesciunt quisquam tenetur fugiat! Vel mollitia quia iste sed laboriosam maiores vero nisi sit, corporis numquam earum facere nihil ipsa omnis voluptatem. Saepe sapiente laborum fugit rerum, iure atque temporibus maxime culpa mollitia cum dignissimos qui fugiat consectetur nostrum consequuntur!
        </p>
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 mt-8 rounded-md hover:bg-pink-700 duration-300 cursor-pointer"> Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 md:p-4">
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>




    </div>
    
    </>
  )
}

export default Course
