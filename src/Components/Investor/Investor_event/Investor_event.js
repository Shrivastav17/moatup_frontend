import React from 'react'

const Investor_event = () => (
    <section className="company-content">
        <div className="events-container">
            <nav className="events-nav">
                <span className="active">Upcoming</span>
                <span>Past</span>
            </nav>
            <div className="event-list">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="event-item">
                        <div className="event-date">
                            <span>01 December</span>
                            <span>2021</span>
                        </div>
                        <div className="event-details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Pellentesque dictum lacus sed iaculis aliquet.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Investor_event;