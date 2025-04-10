import React from "react";
import "./Sidebar_profile.css";

const Sidebar_profile = () => {
    return (
        <aside className="sidebar">
            <img src="https://via.placeholder.com/100" alt="Company Logo" className="company-logo" />
            <h2 className="company-name">JIO</h2>
            <p className="company-tagline">Lorem ipsum dolor sit</p>
            <div className="company-stats">
                <span className="stats-icon">👥</span>
                <span className="stats-number">3,856</span>
            </div>
            <button className="connect-btn">+ Connect</button>
            <button className="follow-btn">Follow</button>
            <div className="company-details">
                <p><strong>Website:</strong> <a href="#">www.website.com</a></p>
                <p><strong>Email ID:</strong> <a href="mailto:info@website.com">info@website.com</a></p>
                <p><strong>Industry:</strong> Utilities</p>
                <p><strong>Company Size:</strong> 1,001-5,000 employees</p>
                <p><strong>Type:</strong> Public Company</p>
                <p><strong>Specialties:</strong> Power Generation, Transmission & Distribution, and Power Projects & Related Services</p>
            </div>
        </aside>
    );
};

export default Sidebar_profile;