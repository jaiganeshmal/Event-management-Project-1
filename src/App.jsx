import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// 🔹 Lazy load Pages
const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Insights = lazy(() => import("./Pages/Insights"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Venus = lazy(() => import("./Pages/Venus"));
const Contact = lazy(() => import("./Pages/Contact"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
