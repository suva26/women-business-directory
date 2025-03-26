import React, { useContext } from "react";
import { BusinessContext } from "../context/BusinessContext";
import BusinessCard from "../components/BusinessCard";
import "./Home.css";

const Home = () => {
  const { businesses } = useContext(BusinessContext);

  return (
    <div className="home">
      <h2>Registered Businesses</h2>
      <div className="business-list">
        {businesses.length > 0 ? businesses.map((biz) => (
          <BusinessCard key={biz.id} business={biz} />
        )) : <p>No businesses registered yet.</p>}
      </div>
    </div>
  );
};

export default Home;
