import React from 'react'
import { FaUser } from "react-icons/fa";
import "./Investor_Left.css"
export default function Investor_Left() {
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
              <hr className='line1' />

            </div>
            {/* <hr className="custom-line" /> */}
    
          
          <div class="menu1">
            <ul>
              <li> <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9064 4.8136H5.90637C4.8018 4.8136 3.90637 5.70903 3.90637 6.8136V20.8136C3.90637 21.9182 4.8018 22.8136 5.90637 22.8136H19.9064C21.0109 22.8136 21.9064 21.9182 21.9064 20.8136V6.8136C21.9064 5.70903 21.0109 4.8136 19.9064 4.8136Z" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9064 2.8136V6.8136" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.90637 2.8136V6.8136" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.90637 10.8136H21.9064" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                Invitations</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H16L14 15H10L8 12H2" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z" stroke="#74B462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
                Inbox</li>
              
            </ul>
            <hr className='line2' />

          </div>
    </>
  )
}
