import React from "react";
import "./Connections_invitations.css";
import { Link } from "react-router-dom";

const invitations = [
  { id: 1, name: "Company Name", logo: "https://via.placeholder.com/50" },
  { id: 2, name: "Company Name", logo: "https://via.placeholder.com/50" },
  { id: 3, name: "Name Surname", logo: "https://via.placeholder.com/50" },
];

const investors = [
  { id: 1, name: "Company Name", logo: "https://via.placeholder.com/50" },
  { id: 2, name: "Company Name", logo: "https://via.placeholder.com/50" },
  { id: 3, name: "Company Name", logo: "https://via.placeholder.com/50" },
];

const Connections_invitations = () => {
  return (
    <div className="connections-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item">
          <i className="ri-mail-line"></i> Invitations <span>3</span>
        </div>
        <div className="sidebar-item">
          <Link to="/myconn">  <i className="ri-group-line"></i> Connections <span>3856</span></Link>
        
        </div>
        <div className="sidebar-item">
          <i className="ri-user-follow-line"></i> Followers <span>140</span>
        </div>
        <div className="sidebar-item">
          <i className="ri-user-follow-fill"></i> Followings <span>214</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Invitations */}
        <h3>Invitations</h3>
        <div className="invitation-list">
          {invitations.map((invite) => (
            <div key={invite.id} className="invite-card">
              <img src={invite.logo} alt={invite.name} className="company-logo" />
              <div className="invite-details">
                <h4>{invite.name}</h4>
                <p>Lorem ipsum</p>
              </div>
              <button className="accept-btn">Accept</button>
              <button className="ignore-btn">Ignore</button>
            </div>
          ))}
        </div>

        {/* Investors You May Know */}
        <h3>Investors you may know</h3>
        <div className="investor-list">
          {investors.map((investor) => (
            <div key={investor.id} className="investor-card">
              <img src={investor.logo} alt={investor.name} className="company-logo" />
              <div className="investor-details">
                <h4>{investor.name}</h4>
                <p>Lorem ipsum</p>
              </div>
              <button className="connect-btn">
                <i className="ri-user-add-line"></i> Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connections_invitations;