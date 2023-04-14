import React from "react";
import "../assets/css/soft-design-system.min.css";

const Heads = () => {
  return (
    <div>
      {/* head container that has a container with an image on the right and a container on the left that has a h1 with "Welcome to Opportunity Oasis" and a H2 with "the place to be" */}
      <div className="headContainer" style={{marginLeft:"50px"}}>
        <div className="right">
         <div className="position-relative">
  <img alt="hello" src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80" className="img-fluid shadow border-radius-lg" />
</div>

        </div>
        <div className="left">
          <h1>Welcome to Opportunity Oasis</h1>
          <h2>The place to be for new life changing Opportunities</h2>
        </div>
      </div>
    </div>
  );
};

export default Heads;
