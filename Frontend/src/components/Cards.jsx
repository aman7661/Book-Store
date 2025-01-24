import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className="mt-4 p-4">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 cursor-pointer">
  <figure>
    <img
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="hover:bg-pink-500 hover:text-white px-2 py-1 rounded-full duration-200 ">${item.price}</div>
      <div className="hover:bg-pink-500 hover:text-white px-2 py-1 rounded-full duration-200 cursor-pointer border-[2px]">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
