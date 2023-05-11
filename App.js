import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import LandingPage from "./src/components/LandingPage";
import LandingPageBody from "./src/components/LandingPageBody";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
