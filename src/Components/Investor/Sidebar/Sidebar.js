import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../Components/Investor/Redux/Reducer/authSlice.js"; // Adjust the path as needed

const stockData = [
  { id: 1, name: "Meta Platform INC", code: "FB", price: "22.87", change: "-22.87%", isPositive: false },
  { id: 2, name: "Panjab National Bank", code: "PNB", price: "22.87", change: "22.87%", isPositive: true },
  { id: 3, name: "State Bank of India", code: "SBI", price: "22.87", change: "-22.87%", isPositive: false },
  { id: 4, name: "Meta Platform INC", code: "FB", price: "22.87", change: "-22.87%", isPositive: false },
  { id: 5, name: "Panjab National Bank", code: "PNB", price: "22.87", change: "22.87%", isPositive: true },
  { id: 6, name: "State Bank of India", code: "SBI", price: "22.87", change: "-22.87%", isPositive: false },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Trending");
  const { token, user } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8001/user/allusers", {
          headers: { Authorization: `Bearer ${token}` },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
    
        const users = await response.json();
    
        // ✅ Extract logged-in user ID from the JWT token
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        const storedUserId = decodedToken?.userId; // Get userId from the token
    
        if (!storedUserId) {
          throw new Error("Invalid token: userId missing");
        }
    
        // ✅ Find the logged-in user from the users array
        const loggedInUser = users.find((user) => user._id === storedUserId);
    
        if (!loggedInUser) {
          throw new Error("Logged-in user not found in fetched users");
        }
    
        // ✅ Dispatch the logged-in user's data to Redux store
        dispatch(setUser(loggedInUser));
      } catch (err) {
        console.error("Error fetching users:", err.message);
      }
    };

    if (token && !user) {
      fetchUsers();
    }
  }, [token, user, dispatch]);

  if (!user) return <p>Loading...</p>;

  
  return (
    <div className="dashboard-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-info">
          <h2 className="profile-name">{user.username}</h2>
          <p className="profile-role">Lorem ipsum dolor sit</p>
          <p className="profile-followers">
            <i className="ri-group-line"></i> 3,856
          </p>
        </div>
      </div>

      <div className="profile-menu">
        <div className="menu-item">
          <i className="ri-calendar-check-line"></i> Invitations
        </div>
        <div className="menu-item">
          <i className="ri-mail-line"></i> Inbox
        </div>
      </div>

      {/* Stock Trends Section */}
      <div className="stock-container">
        <div className="stock-tabs">
          {["Trending", "Bullish", "Bearish"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="stock-list">
          {stockData.map((stock) => (
            <div key={stock.id} className="stock-item">
              <span className={`stock-code ${stock.code.toLowerCase()}`}>{stock.code}</span>
              <span className="stock-name">{stock.name}</span>
              <span className="stock-price">{stock.price}</span>
              <span className={`stock-change ${stock.isPositive ? "up" : "down"}`}>
                {stock.isPositive ? "↑" : "↓"} {stock.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;