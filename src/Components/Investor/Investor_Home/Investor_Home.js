import React from 'react'
import Investor_Header from '../Investor_Header/Investor_Header'
import Investor_Left from "../Investor_Left/Investor_Left"
import Investor_Right from "../Investor_Right/Investor_Right"
import Investor_Feed from "../Investor_Feed/Investor_Feed"

export default function Investor_Home() {
  return (
    <>
    <Investor_Header/>

    <div class="container mt-5 ">
  <div class="row">
    <div class="col-md-4">
      
      <div class="p-3 "><Investor_Left/></div>
    </div>
    <div class="col-md-4">
      
      <div class="p-3 "><Investor_Feed/></div>
    </div>
    <div class="col-md-4">
      
      <div class="p-3 "><Investor_Right/></div>
    </div>
  </div>
</div>

    </>
  )
}
