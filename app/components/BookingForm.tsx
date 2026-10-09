"use client";

import { useState } from "react";

interface BookingFormProps {
  initialService?: string;
}

export default function BookingForm({ initialService = "TV Repair" }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");

  function bookService(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = `Hello Manju Electronic! I want to book a service.

Name: ${name}
Phone: ${phone}
Service: ${service}
Details: ${message || "Not specified"}`;

    window.open(
      `https://wa.me/919894766097?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <form className="booking-form" onSubmit={bookService}>
      <div className="form-badge">⚡ FAST RESPONSE</div>
      <h3>Request a Service</h3>
      <p>Fill in your details to connect directly on WhatsApp.</p>

      <div className="form-group">
        <label htmlFor="customer-name">Your Full Name</label>
        <input
          id="customer-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="customer-phone">Phone Number</label>
        <input
          id="customer-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter 10-digit mobile number"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="service-type">Select Service Needed</label>
        <select
          id="service-type"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="TV Repair">📺 TV Repair & Service</option>
          <option value="RO Service">💧 RO Water Purifier Service</option>
          <option value="UPS Service">⚡ UPS & Battery Service</option>
          <option value="DTH Service">📡 DTH Installation & Alignment</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="problem">Describe Problem / Issue</label>
        <textarea
          id="problem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="E.g., TV display blank, RO filter light red, UPS beeping continuously"
          rows={3}
        />
      </div>

      <button className="btn btn-whatsapp submit-btn" type="submit">
        <span>💬 Send Request on WhatsApp</span>
        <span className="btn-arrow">↗</span>
      </button>

      <small className="form-note">
        🔒 Direct connection to technician • No registration required
      </small>
    </form>
  );
}
