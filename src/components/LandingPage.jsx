import React from "react";
import "../components/LandingPage.css";
import Header from "./Header";
import LandingPageBody from "./LandingPageBody";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="purple-background" landing-page>
      <div className="white-background">
        <Header />
        <LandingPageBody />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
