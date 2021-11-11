import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Farzeen</div>
      <div className="sidebar-links">
        <p onClick={() => navigate("/stream")}>Stream</p>
        <p onClick={() => navigate("/series")}>Series</p>
        <p onClick={() => navigate("/movies")}>Movies</p>
        <p>My List</p>
      </div>
      <div className="sidebar-links">
        <p>Setting</p>
      </div>
    </div>
  );
};

export default DashBoard;
