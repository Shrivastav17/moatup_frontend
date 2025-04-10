import React from 'react'
import moatup from '../Assets/moatup.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
// import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import '../CommonHeader/commonHeader.css';

import Header1Operations from '../Header1Operation/Header1Operation.js';

import { Link } from "react-router-dom";

export default function  CommonHeader() {
 
    return (
        <div className="header1">
            <div className="header1_left">
                <div className="header1_logo">
                    <img src={moatup} alt="logo" />
                </div>

                <div className="header1_search">
                    <input type="text" placeholder='Search' />
                    <SearchIcon className="search_icon" />
                </div>
            </div>

            <div className="header1_right">
    <Link to="/home">
        <Header1Operations Icon={HomeIcon} title="Home" />
    </Link>
    <Link to="/mynetwork">
        <Header1Operations Icon={PeopleIcon} title="My Network" />
    </Link>
    <Link to="/calendar">
        <Header1Operations Icon={CalendarMonthIcon} title="My Calendar" />
    </Link>
    <Link to="/messages">
        <Header1Operations Icon={MessageIcon} title="Message" />
    </Link>
    <Link to="/notifications">
        <Header1Operations Icon={NotificationsIcon} title="Notification" />
    </Link>
    <div className="header1_avatar">
        <Avatar
            alt="Vishal"
            src="/static/images/avatar/1.jpg"  // Avatar image
            sx={{ width: 40, height: 40 }}  // Avatar size
        />
    <Link to="/profile"> <span className="avatar_title">Tata Capital</span> </Link>  
    </div>
</div>

       

        </div>
    )
}
