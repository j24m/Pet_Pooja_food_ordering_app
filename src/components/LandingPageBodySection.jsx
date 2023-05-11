import React from "react";
import "../components/LandingPageBodySection.css";

function LandingPageBodySection(props) {
  return (
    <div>
      <section className="landing-page-section">
        <h1 class="sectionHeading">{props.sectionHeading}</h1>
        {props.children}
      </section>
    </div>
  );
}

export default LandingPageBodySection;
