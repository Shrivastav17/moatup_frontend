import React from 'react'
// import Header from '../Header/Header.js';

import Sidebar from '../Sidebar/Sidebar.js';

import UpcomingEvents from '../UpcomingEvents/UpcomingEvents.js'
import CommonHeader from '../../CommonHeader/CommonHeader.js';
import Feed from '../Feed/Feed.js';
import CreatePost from '../../CreatePost/CreatePost.js';

const Home = () => {
  return (
    <>
   
      <CommonHeader></CommonHeader>
      <div className="container">
        <div className="row">
          <div className="col"><Sidebar></Sidebar></div>
          <div className="col"><Feed></Feed></div>
          <div className="col"><UpcomingEvents></UpcomingEvents></div>
          <CreatePost></CreatePost>
        </div>

      </div>

    </>
  )
}

export default Home

