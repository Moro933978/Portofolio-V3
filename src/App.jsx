import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

  const location = useLocation();

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem("hasSeenWelcome", "true");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const isProjectPage = location.pathname.startsWith("/project");

  return (
    <HelmetProvider>
      {showWelcome && <Loader />}

      {(!showWelcome || sessionStorage.getItem("hasSeenWelcome")) && (
        <>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <AnimatedBackground />
          </div>

          {!isProjectPage && <Navbar />}

          <div className={`relative z-10 ${isProjectPage ? 'pt-0' : ''}`}>
            <Suspense fallback={<div className="min-h-screen bg-[#030014]" />}>
              <Routes>
                <Route path="/" element={<><Home /><About /><Portfolio /><CommentSection /></>} />
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
            </Suspense>
          </div>

          {!isProjectPage && <Footer />}
        </>
      )}
    </HelmetProvider>
  );
}

export default App;