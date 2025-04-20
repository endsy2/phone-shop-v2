import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useSelector } from "react-redux";
import AddToCart from "../home/AddToCart";
import axios from "axios";
import LoadingSpin from "../../utils/LoadingSpin.jsx";

// Loading Spinner


const RootLayout = () => {
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setToken(token);
    }
  }, []);

  const [token, setToken] = useState(null);
  const stateTabCart = useSelector(store => store.cart?.statusTab);

  const handleLogin = () => {
    const newToken = "dummy-token";
    console.log("Token Set: " + newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    console.log("Token has been cleared");
    axios.defaults.withCredentials = false;
    window.location.href = "/";
  };

  return (
    <>
      <header>
        <nav>
          <Navbar token={token} onLogin={handleLogin} onLogout={handleLogout} />
        </nav>
      </header>

      <main
        className={`flex-1 max-w-full m-auto transform transition-transform duration-500 
        ${stateTabCart ? "-translate-x-2 opacity-50" : ""}`}
      >
        {/* Suspense around Outlet */}
        <Suspense fallback={<LoadingSpin />}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>

      {stateTabCart && <AddToCart />}
    </>
  );
};

export default RootLayout;
