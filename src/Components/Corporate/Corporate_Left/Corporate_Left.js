import React from 'react'
import './Corporate_Left.css'
import { FaUser } from "react-icons/fa";
export default function Corporate_Left() {
  return (
    <>
      
        <div className="user-card">
          <img src="p1.png" alt="Profile" className="user-photo" />
          <div className="user-details">
            <h4>Event Name</h4>
            <p>Reliance Jio</p>
            <div className="followers-section">
              <FaUser size={20} className="icon" />
            </div>
            <span>3,456</span>
          </div>
        </div>
        {/* <hr className="custom-line" /> */}

      
      <div class="menu">
        <ul>
          <li> <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9062 2.8136H6.90625C6.37582 2.8136 5.86711 3.02431 5.49204 3.39938C5.11696 3.77446 4.90625 4.28317 4.90625 4.8136V20.8136C4.90625 21.344 5.11696 21.8527 5.49204 22.2278C5.86711 22.6029 6.37582 22.8136 6.90625 22.8136H18.9062C19.4367 22.8136 19.9454 22.6029 20.3205 22.2278C20.6955 21.8527 20.9062 21.344 20.9062 20.8136V8.8136L14.9062 2.8136Z" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.9062 2.8136V8.8136H20.9062" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9062 13.8136H8.90625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9062 17.8136H8.90625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.9062 9.8136H9.90625H8.90625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Create Email</li>
          <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.90625 6.8136H21.9062" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.90625 12.8136H21.9062" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.90625 18.8136H21.9062" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.90625 6.8136H3.91625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.90625 12.8136H3.91625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.90625 18.8136H3.91625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

            Activity Logs</li>
          <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9062 22.8136C18.4291 22.8136 22.9062 18.3364 22.9062 12.8136C22.9062 7.29075 18.4291 2.8136 12.9062 2.8136C7.3834 2.8136 2.90625 7.29075 2.90625 12.8136C2.90625 18.3364 7.3834 22.8136 12.9062 22.8136Z" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.9062 6.8136V12.8136L16.9062 14.8136" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Scheduled</li>
          <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9062 12.8136H16.9062L14.9062 15.8136H10.9062L8.90625 12.8136H2.90625" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.35625 5.9236L2.90625 12.8136V18.8136C2.90625 19.344 3.11696 19.8527 3.49204 20.2278C3.86711 20.6029 4.37582 20.8136 4.90625 20.8136H20.9062C21.4367 20.8136 21.9454 20.6029 22.3205 20.2278C22.6955 19.8527 22.9062 19.344 22.9062 18.8136V12.8136L19.4562 5.9236C19.2907 5.59039 19.0354 5.30997 18.7192 5.11388C18.403 4.91779 18.0383 4.8138 17.6663 4.8136H8.14625C7.77417 4.8138 7.40951 4.91779 7.09329 5.11388C6.77708 5.30997 6.52183 5.59039 6.35625 5.9236V5.9236Z" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Inbox</li>
          <li><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9062 4.8136H5.90625C4.80168 4.8136 3.90625 5.70903 3.90625 6.8136V20.8136C3.90625 21.9182 4.80168 22.8136 5.90625 22.8136H19.9062C21.0108 22.8136 21.9062 21.9182 21.9062 20.8136V6.8136C21.9062 5.70903 21.0108 4.8136 19.9062 4.8136Z" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9062 2.8136V6.8136" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.90625 2.8136V6.8136" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.90625 10.8136H21.9062" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
            Infobase</li>
        </ul>
      </div>

    </>
  )
}
