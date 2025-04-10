import React from "react";
import "./UpcomingEvents.css";

const events = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Jio_telecom_logo.png",
    title: "Lorem ipsum dolor sit a...",
    company: "Reliance Jio",
    time: "Today, 12.45",
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/ICICI_Bank_Logo.svg",
    title: "Lorem ipsum dolor sit a...",
    company: "Reliance Jio",
    time: "Today, 12.45",
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/HDFC_Bank_Logo.svg",
    title: "Lorem ipsum dolor sit a...",
    company: "Reliance Jio",
    time: "Today, 12.45",
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Mahindra-Logo.png",
    title: "Lorem ipsum dolor sit a...",
    company: "Reliance Jio",
    time: "Today, 12.45",
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Axis_Bank_logo.svg",
    title: "Lorem ipsum dolor sit a...",
    company: "Reliance Jio",
    time: "Today, 12.45",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="events-container">
      <h3 className="events-title">UPCOMING EVENTS</h3>
      <hr />
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <img src={event.logo} alt={event.company} className="event-logo" />
            <div className="event-details">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-company">{event.company}</p>
              <p className="event-time">
                <i className="ri-calendar-event-line"></i> {event.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button className="view-all-btn">VIEW ALL</button>
    </div>
  );
};

export default UpcomingEvents;