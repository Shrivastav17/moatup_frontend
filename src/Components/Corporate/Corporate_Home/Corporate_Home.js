import React from 'react'
import Corporate_Header from '../Corporate_Header/Corporate_Header'
import './Corporate_Home.css'
import Corporate_Left from '../Corporate_Left/Corporate_Left'
import Corporate_Feed from '../Corporate_Feed/Corporate_Feed'
import Corporate_Right from '../Corporate_Right/Corporate_Right'
function Corporate_Home() {
  return (

    <>
    <Corporate_Header/>
   <div className="container custom-c mt-5">
      <div className="row ">
        <div className="col-md-4  p-3 mt-3"><Corporate_Left></Corporate_Left></div>
        <div className="col-md-4  p-3 mt-3"><Corporate_Feed></Corporate_Feed></div>
        <div className="col-md-4  p-3 mt-3"><Corporate_Right></Corporate_Right></div>
      </div>
    </div>
    </>

    )
}

export default Corporate_Home
