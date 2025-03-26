import React, { useState } from "react";

export default function BusinessForm({ onAddBusiness }) {
  const [business, setBusiness] = useState({
    name: "",
    owner: "",
    location: "",
    services: "",
    contact: ""
  });

  const handleChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (business.name && business.owner && business.contact) {
      onAddBusiness(business);
      setBusiness({ name: "", owner: "", location: "", services: "", contact: "" });
    }
  };

  return (
    <div className="container">
      <h2>Register Your Business</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Business Name" value={business.name} onChange={handleChange} required />
        <input type="text" name="owner" placeholder="Owner Name" value={business.owner} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={business.location} onChange={handleChange} />
        <textarea name="services" placeholder="Services Offered" value={business.services} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact Info" value={business.contact} onChange={handleChange} required />
        <button type="submit">Register Business</button>
      </form>
    </div>
  );
}
