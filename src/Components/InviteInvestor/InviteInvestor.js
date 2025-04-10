import React, { useState } from "react";

const InviteInvestor = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventPlace: "",
    emails: "",
    inviteFile: null,
    databaseFile: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("eventName", formData.eventName);
      formDataToSend.append("eventDate", formData.eventDate);
      formDataToSend.append("eventTime", formData.eventTime);
      formDataToSend.append("eventPlace", formData.eventPlace);
      formDataToSend.append("emails", formData.emails);
      formDataToSend.append("message", formData.message);

      // Append the invite file
      if (formData.inviteFile) {
        formDataToSend.append("inviteFile", formData.inviteFile);
      }

      // Append the database file if exists
      if (formData.databaseFile) {
        formDataToSend.append("databaseFile", formData.databaseFile);
      }

      // Send the data using fetch
      const response = await fetch("http://localhost:8090/inviteInvestor", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        console.error("Error submitting the form:", data);
        alert(data.message || "Failed to send the invitation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send the invitation. Please try again.");
    }
  };

  return (
    <div className="invite-investor-form-container">
      <h2>Invite Investor</h2>
      <form onSubmit={handleSubmit} className="invite-investor-form">
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Date:</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Time:</label>
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Place:</label>
          <input
            type="text"
            name="eventPlace"
            value={formData.eventPlace}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Emails (comma-separated):</label>
          <input
            type="text"
            name="emails"
            value={formData.emails}
            onChange={handleChange}
            placeholder="Enter multiple emails separated by commas"
            required
          />
        </div>

        <div className="form-group">
          <label>Attach Invite:</label>
          <input type="file" name="inviteFile" onChange={handleFileChange} />
        </div>

        <div className="form-group">
          <label>Attach Database:</label>
          <input type="file" name="databaseFile" onChange={handleFileChange} />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InviteInvestor;