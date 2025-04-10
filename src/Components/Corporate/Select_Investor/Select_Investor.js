import React from 'react'
import './Select_Investor.css'
export default function Select_Investor() {
    return (
        <>
            <div className="email-container">
                <h3>Select Investor</h3>
                <p>150 contacts selected</p>
                <input
                    type="email"
                    placeholder="Send Email"
                    className="email-input"
                />

                <div className="radio-group">
                    <label>
                        <input type="radio" name="emailOption" value="all" /> Invite Investor
                    </label>
                    <label>
                        <input type="radio" name="emailOption" value="selected" /> Send Material
                    </label>
                    <label>
                        <input type="radio" name="emailOption" value="custom" /> Dipstik
                    </label>
                </div>
                <button className='custom-btn'>NEXT</button>
            </div>
        </>

    )
}
