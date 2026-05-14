import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Loader from "./Components/LoadingScreen";
import Navbar from "./layout/Navbar";
import Footer from "./layout/footer";
import AnimatedBackground from "./Components/background";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portofolio";
import CommentSection from "./Components/Comment";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  const [showWelcome, setShowWelcome] = useState(() => {
    return !sessionStorage.getItem("hasSeenWelcome");
  });

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem("hasSeenWelcome", "true");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const hideNavbar = location.pathname.startsWith("/project");

  return (
    <HelmetProvider>
      {showWelcome && <Loader />}

      {(!showWelcome || sessionStorage.getItem("hasSeenWelcome")) && (
        <>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <AnimatedBackground />
          </div>

          {/* 🔥 4. اظهر النافبار فقط لو مش في صفحة البروجكت */}
          {!hideNavbar && <Navbar />}

          <div className={`relative z-10 ${hideNavbar ? 'pt-0' : ''}`}>
            <Suspense fallback={<div className="min-h-screen bg-[#030014]" />}>
              <Routes>
                <Route path="/" element={<><Home /><About /><Portfolio /><CommentSection /></>} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </>
      )}
    </HelmetProvider>
  );
}

export default App;