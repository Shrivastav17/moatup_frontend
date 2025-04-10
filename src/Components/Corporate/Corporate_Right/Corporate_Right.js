import React from 'react'
import './Corporate_Right.css'
export default function Corporate_Right() {
  return (
    <>
      <div className="events-container">
        <h3>UPCOMING EVENTS</h3>
        <hr className="divider" />

        <div className="event-card">
          <img src="Untitled.png" alt="Profile" className="profile-photo" />
          <div className="event-details">
            <h4>Event Name</h4>
            <p>Reliance Jio</p>
            <p>10th April 2025</p>
          </div>
        </div>
        <div className="event-card">
          <img src="Untitled.png" alt="Profile" className="profile-photo" />
          <div className="event-details">
            <h4>Event Name</h4>
            <p>Reliance Jio</p>
            <p>10th April 2025</p>
          </div>
        </div>
        <div className="event-card">
          <img src="Untitled.png" alt="Profile" className="profile-photo" />
          <div className="event-details">
            <h4>Event Name</h4>
            <p>Reliance Jio</p>
            <p>10th April 2025</p>
          </div>
        </div>
      </div>
      <button className='view-btn'>VIEW ALL</button>

    </>
  )
}
