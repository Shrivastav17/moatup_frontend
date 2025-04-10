import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import About from "./About";
// import Posts from "./Posts";
// import Events from "./Events";
// import IRLibrary from "./IRLibrary";
// import NewsRoom from "./NewsRoom";
import "./Investor_profile.css";
import Sidebar_profile from "../Sidebar_profile/Sidebar_profile";
import CommonHeader from "../../CommonHeader/CommonHeader";
import Investor_about from "../Investor_about/Investor_about";
import Investor_post from "../Investor_post/Investor_post";
import Investor_event from "../Investor_event/Investor_event";
import Investor_IRlib from "../Investor_IRlib/Investor_IRlib";
import Investor_Newsroom from "../Investor_Newsroom/Investor_Newsroom";

const Investor_profile = () => {
    const [activeTab, setActiveTab] = useState("ABOUT");

    const renderComponent = () => {
        switch (activeTab) {
            case "ABOUT":
                return <Investor_about />;
             case "POSTS":
                return <Investor_post />;
             case "EVENTS":
               return <Investor_event />;
             case "IR LIBRARY":
                return <Investor_IRlib />;
             case "NEWS ROOM":
               return <Investor_Newsroom />;
            default:
                return <Investor_about />;
        }
    };

    return (
        <>
        <CommonHeader></CommonHeader>
        <div className="company-profile-container">
            <Sidebar_profile/>
            <main className="company-main">
                <nav className="company-nav">
                    <ul>
                        {["ABOUT", "POSTS", "EVENTS", "IR LIBRARY", "NEWS ROOM"].map((tab) => (
                            <li
                                key={tab}
                                className={activeTab === tab ? "active" : ""}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </nav>
                {renderComponent()}
            </main>
        </div>
        </>
    );
};

export default Investor_profile;