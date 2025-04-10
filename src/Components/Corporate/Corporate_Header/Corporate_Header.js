import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {FaSearch, FaBell, FaEnvelope, FaCalendarAlt, FaUsers, FaHome } from "react-icons/fa";
import './Corporate_Header.css'

export default function Corporate_Header() {
    return (
      
      <>
      <div className='custom-navbar mt-2 mb-5'>
      <nav className="navbar navbar-expand-lg navbar-light  px-3">
        <a className="navbar-brand" href="#">
          <img 
            src="moatup.png"  // Replace with your logo URL
            alt="Logo"
            className="me-2"
          />
        </a>
        
        <form className="custom-search ">
          <div className="input-group ">
            <input className="form-control" type="search" placeholder="Search..." />
            <FaSearch className="text-muted" size={18} />
          </div>
        </form>
  
        <div className='custom-links'>
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link home-1" href="#"><FaHome size={20} /> Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#"><FaUsers size={20} /> My Network</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#"><FaCalendarAlt size={20} /> Calendar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><FaEnvelope size={20} /> Messages</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#"><FaBell size={20} /></a>
          </li>
  
          <li className="nav-item mx-2 nav-user">
            <a className="nav-link fw-bold" href="#">John Doe</a>
          </li>
        </ul>
        </div>
      </nav>
   
      </div>
      <hr/>
      </>
    );
  }
  
