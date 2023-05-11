import React from "react";
import "../components/LandingPageBody.css";
import LandingPageBodySection from "./LandingPageBodySection";
import OnTheWay from "../assets/Take Away-amico.svg";
import OrderFood from "../assets/Order food-amico.svg";
import DoorStepDelivery from "../assets/Take Away-cuate.svg";

function LandingPageBody() {
  return (
    <div className="landing-page-body">
      <div class="flex-between-illustration-Info middle-section">
        <LandingPageBodySection sectionHeading="Your Favourite Food is on the way!">
          <p>Get your food in 30 minutes from placing the order.</p>
          <button>Track Order</button>
        </LandingPageBodySection>
        <img src={OnTheWay} />
      </div>

      <div class="flex-between-illustration-Info flex-reverse">
        <LandingPageBodySection sectionHeading="Find Favourite Restaurants and discover new ones from our App.">
          <p>
            Pate Pooja is the best online food delivery app with an amazing user
            experience.
          </p>
          <button>Explore</button>
        </LandingPageBodySection>
        <img src={OrderFood} />
      </div>

      <div class="flex-between-illustration-Info middle-section">
        <LandingPageBodySection sectionHeading="Receive your food at your doorstep.">
          <p>
            We will Deliver your food fresh and quick at your door step with our
            fast bike and feedback service.
          </p>
        </LandingPageBodySection>
        <img src={DoorStepDelivery} />
      </div>
    </div>
  );
}

export default LandingPageBody;
