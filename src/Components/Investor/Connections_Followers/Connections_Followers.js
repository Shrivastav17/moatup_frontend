import React from "react";
import { Link } from "react-router-dom";
import "./Connections_Followers.css";
import CommonHeader from '../../CommonHeader/CommonHeader.js';

const followers = [
    { id: 1, name: "Name Surname", logo: "https://via.placeholder.com/50" },
    { id: 2, name: "Name Surname", logo: "https://via.placeholder.com/50" },
    { id: 3, name: "Name Surname", logo: "https://via.placeholder.com/50" },
];

const Connection_Followers = () => {
    return (
      <>
          <CommonHeader></CommonHeader>
        <div className="followers-container">
            {/* Sidebar */}
            <div className="sidebar">
              <div className="sidebar-item">
                <i className="ri-mail-line"></i> Invitations <span>3</span>
              </div>
              <div className="sidebar-item">
                <Link to="/myconn">  <i className="ri-group-line"></i> Connections <span>3856</span></Link>
              </div>
              <div className="sidebar-item">
              <Link to="/followers"> 
                <i className="ri-user-follow-line"></i> Followers <span>140</span></Link>
              </div>
              <div className="sidebar-item">
                <i className="ri-user-follow-fill"></i> Followings <span>214</span>
              </div>
            </div>
      
            {/* Main Content */}
            <div className="container">
                <h2>140 Followers</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Search by Name" />
                    <button>all-investors-Corporate</button>
                    <button>Sectors</button>
                </div>
                <p>Sort by: <strong>Recently added</strong></p>

                <div className="followers-list">
                    {followers.map((invite) => (
                        <div key={invite.id} className="invite-card">
                            <img src={invite.logo} alt={invite.name} className="company-logo" />
                            <div className="followers-details">
                                <h4>{invite.name}</h4>
                                <p>Lorem ipsum</p>
                            </div>
                            <button className="accept-btn">Accept</button>
                            <button className="ignore-btn">Ignore</button>
                        </div>
                    ))}
                </div>
            </div>
          </div>
      
            {/* Main Content */}
         
            </>
    );
};

export default Connection_Followers;