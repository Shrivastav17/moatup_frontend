import React from 'react'
import Corporate_Header from '../Corporate_Header/Corporate_Header'
import './Corporate_Home.css'
function Corporate_Home() {
  return (

    <>
    <Corporate_Header/>
   <div className="container custom-c mt-5">
      <div className="row ">
        <div className="col-md-4  p-3 mt-3"><Leftsidebar></Leftsidebar></div>
        <div className="col-md-4  p-3 mt-3"><Feed></Feed></div>
        <div className="col-md-4  p-3 mt-3"><Rightsidebar></Rightsidebar></div>
      </div>
    </div>
    </>

    )
}

export default Corporate_Home
