import React, { useState, useContext } from "react";
import { BusinessContext } from "../context/BusinessContext";
import "./RegisterBusiness.css";

const RegisterBusiness = () => {
  const { addBusiness } = useContext(BusinessContext);
  const [business, setBusiness] = useState({ name: "", category: "", contact: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBusiness(business);
    alert("Business submitted for approval.");
  };

  return (
    <div className="register">
      <h2>Register Your Business</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Business Name" onChange={(e) => setBusiness({ ...business, name: e.target.value })} required />
        <input type="text" placeholder="Category" onChange={(e) => setBusiness({ ...business, category: e.target.value })} required />
        <input type="text" placeholder="Contact Details" onChange={(e) => setBusiness({ ...business, contact: e.target.value })} required />
        <input type="text" placeholder="Location" onChange={(e) => setBusiness({ ...business, location: e.target.value })} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterBusiness;
