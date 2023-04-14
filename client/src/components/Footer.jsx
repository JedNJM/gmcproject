import React from 'react';
// import css file for footer
import "./Footer.css" 

export default function Footer() {
  return (
   <footer>
  
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2023 <a href="#">Logo.</a>All rights reserved</span>
      <span className="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms &amp; condition</a>
      </span>
    </div>
  </div>
</footer>

  );
}