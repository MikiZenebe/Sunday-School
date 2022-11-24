import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Firebase
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//Pages
import Home from "./pages/Home";
import NewYouth from "./pages/NewYouth";
import DetailYouth from "./components/DetailYouth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [youth, setYouth] = useState([]);

  //Fetch All Data from DB
  useEffect(() => {
    const getYouths = async () => {
      const data = await getDocs(collection(db, "youths"));
      setYouth(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getYouths();
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />

        <Route path="/" element={<Home youth={youth} setYouth={setYouth} />} />
        <Route path="/newyouth" element={<NewYouth />} />
        <Route path="/update/:id" element={<NewYouth />} />
        <Route
          path="/detail/:id"
          element={<DetailYouth youth={youth} setYouth={setYouth} />}
        />
      </Routes>
    </>
  );
}

export default App;
