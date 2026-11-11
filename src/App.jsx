import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CardProvider } from "./context/CardContext";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Gallery from "./pages/Gallery";
import "./styles/builder.scss";

function App() {
  return (
    <CardProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Eski linklar uchun yo'naltirish (Redirect) */}
          <Route path="/main-generator" element={<Navigate to="/builder" replace />} />
          <Route path="/full-generator" element={<Navigate to="/builder" replace />} />
          <Route path="/all-cards" element={<Navigate to="/gallery" replace />} />
          <Route path="/generate" element={<Navigate to="/builder" replace />} />

          {/* Har qanday noma'lum yo'nalish uchun */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </CardProvider>
  );
}

export default App;
