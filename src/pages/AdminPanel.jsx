import React, { useContext } from "react";
import { BusinessContext } from "../context/BusinessContext";

const AdminPanel = () => {
  const { pendingBusinesses, approveBusiness } = useContext(BusinessContext);

  return (
    <div>
      <h2>Admin Panel - Pending Approvals</h2>
      {pendingBusinesses.map((biz) => (
        <div key={biz.id}>
          <h3>{biz.name}</h3>
          <p>Category: {biz.category}</p>
          <p>Contact: {biz.contact}</p>
          <p>Location: {biz.location}</p>
          <button onClick={() => approveBusiness(biz.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
