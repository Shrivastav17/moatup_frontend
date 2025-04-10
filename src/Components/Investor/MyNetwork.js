import React from 'react'

import CommonHeader from '../CommonHeader/CommonHeader.js'
import Connections_invitations from './Connections_invitation/Connections_invitations.js'

export default function MyNetwork() {
  return (
    <>
      <CommonHeader></CommonHeader>
    <div className="container">
  
  <Connections_invitations></Connections_invitations>
    </div>
  
 

    </>
  )
}
