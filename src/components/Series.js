import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import Footer from "./Footer";

const Series = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    let response = await fetch(url);
    let json = await response.json();
    setData(json.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <DashBoard />
      <div>
        <div className="dashboard-hero"></div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-content_img-container">
          {!loading &&
            data.map((item) => {
              return (
                <img
                  className="dashboard-content_img"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
