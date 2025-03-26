import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([]);
  const [pendingBusinesses, setPendingBusinesses] = useState([]);

  const addBusiness = (business) => {
    setPendingBusinesses([...pendingBusinesses, { ...business, id: uuidv4() }]);
  };

  const approveBusiness = (id) => {
    const businessToApprove = pendingBusinesses.find((biz) => biz.id === id);
    setBusinesses([...businesses, businessToApprove]);
    setPendingBusinesses(pendingBusinesses.filter((biz) => biz.id !== id));
  };

  return (
    <BusinessContext.Provider value={{ businesses, pendingBusinesses, addBusiness, approveBusiness }}>
      {children}
    </BusinessContext.Provider>
  );
};
