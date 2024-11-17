import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmsList from "./components/FilmsList";
import FilmDetails from "./components/FilmDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilmsList />} />
        <Route path="/films/:id" element={<FilmDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
