import React from 'react';
import Register from './Components/Register/Register.js';
import LogIn from './Components/LogIn.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forgetpassword from "./Components/ForgetPassword/Forgetpassword";
import VerifyOTP from './Components/VerifyOTP/VerifyOTP.js';
import { ToastContainer } from 'react-toastify';
import NewPassword from './Components/NewPassword/NewPassword.js';
import Header from './Components/Header/Header.js';
// import Home from './Components/Home/Home.js';

import Home from './Components/Investor/Home/Home.js'
import MyNetwork from './Components/Investor/MyNetwork.js';

import Connections_Con from './Components/Investor/Connections_Con/Connections_Con.js';
import Connection_Followers from './Components/Investor/Connections_Followers/Connections_Followers.js';
import Calendar from './Components/Investor/Calendar/Calendar.js';
import Message from './Components/Investor/Message/Message.js';
import Investor_profile from './Components/Investor/Investor_profile/Investor_profile.js';
import Investor_about from './Components/Investor/Investor_about/Investor_about.js';
import CreatePost from './Components/CreatePost/CreatePost.js';
import Corporate_Home from './Components/Corporate/Corporate_Home/Corporate_Home.js';
import InviteInvestor from './Components/InviteInvestor/InviteInvestor.js';
import SendMaterial from './Components/Corporate/SendMaterial/SendMaterial.js';
import Investor_Home from './Components/Investor/Investor_Home/Investor_Home.js';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/verifyotp" element={<VerifyOTP />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/header" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/myconn" element={<Connections_Con />} />
          <Route path="/followers" element={<Connection_Followers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/profile" element={<Investor_profile />} />
          <Route path="/about" element={<Investor_about />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/corporate_home" element={<Corporate_Home />} />
          <Route path="/investor_home" element={<Investor_Home/>} />
          <Route path="/invite_investor" element={< InviteInvestor/>} />
          <Route path="/send_material" element={< SendMaterial/>} />

        </Routes>
      </Router>
    </>
  );
}


