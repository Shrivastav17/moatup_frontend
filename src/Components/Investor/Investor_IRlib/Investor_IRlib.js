import React from 'react'
import './Investor_IRlib.css';
const Investor_IRlib= () => (
    <section className="company-content">
        <div className="ir-library-container">
            <nav className="ir-library-nav">
                <ul>
                    <li className="active">Annual Reports & Proxy</li>
                    <li>Investor Day & Other Events</li>
                    <li>Quarterly Earnings</li>
                    <li>Intimation to Stock Exchanges</li>
                </ul>
            </nav>
            <div className="ir-documents">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="ir-document">
                        <div className="ir-icon">📄</div>
                        <div className="ir-text">Lorem ipsum dolor sit amet</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
export default  Investor_IRlib;

