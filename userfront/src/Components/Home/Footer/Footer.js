import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2021 <span>Hamza Amdouni.</span>All rights reserved
          </span>
          <span className="policy_terms">
            <span>Privacy policy</span>
            <span>Terms &amp; condition</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
