import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import OpenCheckList from "./pages/openchecklist";
import Notes from "./pages/notes";
import History from "./pages/history";
import CloseCheckList from "./pages/closechecklist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/openchecklist" element={<OpenCheckList />} />
          <Route path="/closechecklist" element={<CloseCheckList />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
