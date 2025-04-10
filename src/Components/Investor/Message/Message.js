import React, { useState } from "react";
import "./Message.css";
import CommonHeader from "../../CommonHeader/CommonHeader";

const users = [
    { id: 1, name: "Nancy Fernandez", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "Jonathan Curtis", avatar: "https://via.placeholder.com/40" },
    { id: 3, name: "Carolina Weber", avatar: "https://via.placeholder.com/40" },
];

const Message = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: "Nancy Fernandez", text: "Hi there!", incoming: true },
        { id: 2, sender: "You", text: "Hello! How are you?", incoming: false },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: messages.length + 1, sender: "You", text: input, incoming: false }]);
            setInput("");
        }
    };

    return (
        <>
        <CommonHeader></CommonHeader>
        <div className="chat-container">
         
            <aside className="sidebar">
                <h2>Chat</h2>
                <input type="text" placeholder="Search..." className="search-bar" />
                <ul className="user-list">
                    {users.map(user => (
                        <li key={user.id} className="user-item">
                            <img src={user.avatar} alt={user.name} className="avatar" />
                            <span>{user.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="new-messages">
                    <h3>New Messages</h3>
                    <p>You have 3 new messages</p>
                </div>
            </aside>
            <main className="chat-window">
                <header className="chat-header">
                    <span className="user-name">Nancy Fernandez</span>
                    <button className="settings-btn">⋮</button>
                </header>
                <div className="messages">
                    {messages.map(msg => (
                        <div key={msg.id} className={msg.incoming ? "message incoming" : "message outgoing"}>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                </div>
                <footer className="chat-footer">
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." className="message-input" />
                    <button className="send-btn" onClick={handleSend}>Send</button>
                </footer>
            </main>
            <aside className="small-sidebar">
                <h3>Contacts</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="contact-item">
                            <img src={user.avatar} alt={user.name} className="contact-avatar" />
                            {user.name}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
        </>
    );
};

export default Message;