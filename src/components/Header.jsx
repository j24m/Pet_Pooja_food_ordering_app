import React from "react";
import "../components/Header.css";

function Header() {
  return (
    <nav className="food-app-navbar-container">
      <h1 className="food-app-nav-logo">
        <a href="#">Pate Pooja</a>
      </h1>
      <ul className="food-app-nav-items">
        {/* <li className="position-relative">
          <input type="text" placeholder="Search" />
          <a
            style={{
              display: "flex",
              gap: "1rem",
              "align-items": "start",
            }}
            href="#"
          >
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
              />
            </svg>
          </a>
        </li> */}
        <li>
          <a href="#">Restaurants</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <a href="#">Wishlist</a>
        </li>
        <li>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
