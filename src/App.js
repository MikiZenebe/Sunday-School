import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import NewYouth from "./pages/NewYouth";
import UpdateYouth from "./pages/UpdateYouth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newyouth" element={<NewYouth />} />
        <Route path="/update" element={<UpdateYouth />} />
      </Routes>
    </>
  );
}

export default App;
