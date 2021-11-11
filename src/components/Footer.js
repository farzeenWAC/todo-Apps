import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const path = window.location.pathname;
  return (
    <div>
      <p className="footer">
        <p>Powered by Farzeen</p>
        {path !== "/" ? (
          <Link to="/" className="footer-button">
            Logout
          </Link>
        ) : (
          <p className="footer-button">Footer</p>
        )}
      </p>
    </div>
  );
}

export default Footer;
